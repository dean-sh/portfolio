// app/api/rag/route.js (Updated for App Router + LLM Generation + More Context)
import { Index } from "@upstash/vector";
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";
import { RunnablePassthrough } from "@langchain/core/runnables";

export const dynamic = 'force-dynamic'; // Prevent caching

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize Langchain OpenAI client
const chatModel = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: "gpt-4o-mini",
});

// Initialize Upstash Vector client
const index = new Index({
  url: process.env.UPSTASH_VECTOR_REST_URL,
  token: process.env.UPSTASH_VECTOR_REST_TOKEN,
});

const CONTEXT_SCORE_THRESHOLD = 0.70; // Minimum similarity score for context chunks
const MAX_CONTEXT_CHUNKS = 5; // Number of context chunks to retrieve initially
const MAX_TOTAL_CHUNKS = 5; // Maximum total chunks to use for final response

// Function to query the vector database
async function queryVectorStore(query, topK = MAX_CONTEXT_CHUNKS) {
  console.log(`Querying vector database with: "${query}" (topK=${topK})`);
  const results = await index.query({
    data: query,
    topK: topK,
    includeMetadata: true,
    includeData: true,
  });
  
  return results
    .filter(r => r.score >= CONTEXT_SCORE_THRESHOLD)
    .map(r => r.data);
}

// Export named POST function for App Router
export async function POST(req) { 
  try {
    const { query, conversationHistory = [] } = await req.json(); 

    if (!query || typeof query !== 'string') {
      return NextResponse.json({ detail: 'Query parameter is required and must be a string.' }, { status: 400 });
    }

    // First, retrieve context from vector database
    const initialContext = await queryVectorStore(query);
    
    console.log(`Initial context retrieval found ${initialContext.length} relevant chunks`);

    // Format conversation history
    const formattedConversation = conversationHistory.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    // Create a Langchain prompt template for the first response
    const responsePrompt = ChatPromptTemplate.fromMessages([
      ["system", `You are Dean Shabi's digital twin, answering questions about Dean based on provided context.
- Be concise and direct in your responses.
- Respond with professional enthusiasm, highlighting Dean's key strengths.
- Your answer MUST be based *only* on the information contained within the provided text context.
- Frame Dean's experiences and skills positively, emphasizing concrete achievements.
- If you CANNOT answer fully based on the provided context, respond with "NEED_MORE_INFORMATION" followed by what specifically you need to search for.
- DO NOT make up information if it's not in the context.`],
      ...formattedConversation,
      ["user", `Context documents:
------
{context}
------

Question: {query}

Answer (based only on the context above, keep responses brief and focused):`]
    ]);

    // Create chain for initial answer attempt
    const initialChain = RunnableSequence.from([
      {
        context: () => initialContext.join("\n---\n"),
        query: () => query,
      },
      responsePrompt,
      chatModel,
      new StringOutputParser(),
    ]);

    // Execute the initial chain
    const initialResponse = await initialChain.invoke({});
    console.log("Initial response:", initialResponse);

    // Check if the model needs more information
    if (initialResponse.includes("NEED_MORE_INFORMATION")) {
      console.log("Model needs more information. Performing deeper search...");
      
      // Extract the search query from the response
      const searchQuery = initialResponse.split("NEED_MORE_INFORMATION")[1].trim();
      
      // Create a prompt to refine the search query
      const searchRefinerPrompt = ChatPromptTemplate.fromMessages([
        ["system", "You are a search query optimizer. Your job is to take a question and create specific search queries that will help find the answer in a vector database."],
        ["user", `Original question: ${query}
        
Additional context needed: ${searchQuery}

Create 2 specific, targeted search queries related to this information need. Each query should be different and target different aspects of the information need. Respond with ONLY the queries, one per line.`]
      ]);
      
      // Create chain for search query refinement
      const searchRefinerChain = RunnableSequence.from([
        searchRefinerPrompt,
        chatModel,
        new StringOutputParser(),
      ]);
      
      // Get refined search queries
      const refinedQueries = await searchRefinerChain.invoke({});
      const queryList = refinedQueries.split('\n').filter(q => q.trim()).slice(0, 2);
      
      console.log("Refined search queries:", queryList);
      
      // Perform multiple searches with refined queries
      const additionalContextPromises = queryList.map(q => queryVectorStore(q, 2));
      const additionalContextResults = await Promise.all(additionalContextPromises);
      
      // Combine all results, removing duplicates, but limit to MAX_TOTAL_CHUNKS
      const seenContent = new Set(initialContext);
      let allContext = [...initialContext];
      
      for (const chunk of additionalContextResults.flat()) {
        if (!seenContent.has(chunk) && allContext.length < MAX_TOTAL_CHUNKS) {
          seenContent.add(chunk);
          allContext.push(chunk);
        }
      }
      
      // Ensure we're not exceeding MAX_TOTAL_CHUNKS
      allContext = allContext.slice(0, MAX_TOTAL_CHUNKS);
      
      console.log(`Enhanced context with ${allContext.length} chunks (limited to ${MAX_TOTAL_CHUNKS} max)`);
      
      // Create final answer prompt with enhanced context
      const finalAnswerPrompt = ChatPromptTemplate.fromMessages([
        ["system", `You are Dean Shabi's digital twin, answering questions about Dean based on provided context.
- Be concise and direct, limiting responses to 2-3 sentences when possible.
- Respond with professional enthusiasm, highlighting Dean's key strengths.
- Your answer MUST be based *only* on the information contained within the provided text context.
- Frame Dean's experiences and skills positively, emphasizing concrete achievements.
- Remember you're having a multi-turn conversation with the user, so refer back to previous exchanges when relevant.`],
        ...formattedConversation,
        ["user", `Enhanced context documents (searched specifically for your question):
------
{context}
------

Question: {query}

Answer (based only on the context above, keep responses brief and focused):`]
      ]);
      
      // Create chain for final answer
      const finalChain = RunnableSequence.from([
        {
          context: () => allContext.join("\n---\n"),
          query: () => query,
        },
        finalAnswerPrompt,
        chatModel,
        new StringOutputParser(),
      ]);
      
      // Get final answer with enhanced context
      const enhancedAnswer = await finalChain.invoke({});
      console.log("Enhanced answer:", enhancedAnswer);
      
      return NextResponse.json({ answer: enhancedAnswer });
    } else {
      // If the initial answer was sufficient, return it
      return NextResponse.json({ answer: initialResponse });
    }

  } catch (error) {
    console.error('RAG API Error:', error);
    let errorMessage = 'An internal server error occurred.';
    
    if (error.response && typeof error.response.data === 'object' && error.response.data !== null && 'error' in error.response.data) {
        errorMessage = error.response.data.error?.message || errorMessage;
        console.error('OpenAI API Error:', error.response.data.error);
    } else if (error.message && error.message.includes('UpstashError')) {
        console.error('Upstash Vector Error:', error);
        errorMessage = 'Failed to query the vector database.';
    } else if (error instanceof Error) {
        errorMessage = error.message; 
    }
    
    return NextResponse.json({ detail: errorMessage }, { status: 500 });
  }
} 