import Image from 'next/image';
import { ProjectDetails } from '@/components/ProjectDetails';
import ProjectLayout from '@/components/ProjectLayout';

export const metadata = {
  title: "Equity Copilot | Dean Shabi",
  description: "RAG-powered AI assistant for the Equity research market, built on Azure AI and LangChain."
};

export default function EquityCopilotProject() {
  return (
    <ProjectLayout>
      <ProjectDetails
        title="Equity Copilot"
        subtitle="AI agents that assist with stock analysis"
        image="/images/stock-analysis.jpg"
        industry="Finance"
        client="Investment Research Group"
        tags={["Large Language Models", "Named Entity Recognition", "Vector Databases", "Financial Analysis", "NLP", "Python", "FastAPI", "Pinecone", "AWS Lambda", "PyTorch"]}
      >
        <div className="space-y-8">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-primary/90">
                Equity Copilot is an AI-powered platform that transforms how analysts and fund managers conduct investment research. By leveraging large language models and domain-specific fine-tuning, the system extracts nuanced insights from earnings calls, SEC filings, market data, and news sources.
              </p>
              
              <p>
                Traditional equity research is labor-intensive and time-consuming, with analysts spending countless hours reading transcripts, scanning financial statements, and cross-referencing data points. Equity Copilot automates much of this process, allowing human analysts to focus on higher-value activities like developing investment theses and strategic decision-making.
              </p>
            </div>
          </section>
          
          {/* Technical Solution Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">Technical Solution</h2>
            <p className="mb-6">Our approach combined several advanced AI technologies to create a comprehensive research assistant:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Domain-Specific LLMs</h3>
                <p>Fine-tuned foundation models to understand financial terminology, market dynamics, and accounting principles.</p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">RAG System</h3>
                <p>Retrieval-augmented generation system that accesses proprietary financial databases and research reports to provide evidence-based analysis.</p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Financial NLP Pipeline</h3>
                <p>Custom natural language processing pipeline optimized for financial text, including sentiment analysis and named entity recognition for companies, executives, and key metrics.</p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Multi-Agent Framework</h3>
                <p>System architecture featuring specialized agents for different tasks, working together to analyze financial data and generate insights.</p>
              </div>
            </div>
          </section>
          
          {/* System Architecture Section */}
          <section className="bg-card/30 rounded-xl p-6 border border-border/50">
            <h2 className="text-2xl font-bold text-primary mb-4">System Architecture</h2>
            <div className="relative rounded-lg overflow-hidden bg-background/50 flex items-center justify-center py-8">
              <div className="text-center p-8 w-full">
                <div className="flex justify-center mb-8">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
                    <div className="bg-card/60 rounded-xl p-4">
                      <h3 className="font-medium mb-2">Data Sources</h3>
                      <div className="space-y-2">
                        <div className="bg-background/50 rounded-lg p-2 text-sm">SEC Filings</div>
                        <div className="bg-background/50 rounded-lg p-2 text-sm">Earnings Calls</div>
                        <div className="bg-background/50 rounded-lg p-2 text-sm">News & Reports</div>
                      </div>
                    </div>
                    
                    <div className="bg-card/60 rounded-xl p-4">
                      <h3 className="font-medium mb-2">Processing Pipeline</h3>
                      <div className="space-y-2">
                        <div className="bg-background/50 rounded-lg p-2 text-sm">NLP Engine</div>
                        <div className="bg-background/50 rounded-lg p-2 text-sm">Vectorization</div>
                        <div className="bg-background/50 rounded-lg p-2 text-sm">Data Enrichment</div>
                      </div>
                    </div>
                    
                    <div className="bg-card/60 rounded-xl p-4">
                      <h3 className="font-medium mb-2">Knowledge Base</h3>
                      <div className="space-y-2">
                        <div className="bg-background/50 rounded-lg p-2 text-sm">Vector DB</div>
                        <div className="bg-background/50 rounded-lg p-2 text-sm">Financial Metrics</div>
                        <div className="bg-background/50 rounded-lg p-2 text-sm">Market Data</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="bg-accent/10 rounded-xl p-4 mb-6 mx-auto max-w-md border border-accent/20">
                  <h3 className="font-medium">Agent Orchestration Layer</h3>
                </div>
                
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mx-auto max-w-3xl">
                  <div className="bg-card rounded-lg p-3">
                    <h4 className="text-sm font-medium">Analyst Interface</h4>
                  </div>
                  <div className="bg-card rounded-lg p-3">
                    <h4 className="text-sm font-medium">Reporting Engine</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Use Cases Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-accent mb-3">Earnings Call Analysis</h3>
                <p>Extracting key insights, tonality shifts, and executive sentiment from quarterly earnings calls, highlighting significant changes from previous quarters.</p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-accent mb-3">SEC Filing Summarization</h3>
                <p>Automatically processing complex SEC filings (10-K, 10-Q, 8-K) to identify material changes, risk factors, and financial trends.</p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-accent mb-3">Competitive Intelligence</h3>
                <p>Tracking competitor mentions across earnings calls and public statements to map competitive dynamics and market positioning.</p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-accent mb-3">Red Flag Detection</h3>
                <p>Identifying accounting irregularities, concerning management changes, or operational challenges that might affect financial performance.</p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-accent mb-3">Thematic Research</h3>
                <p>Exploring emerging industry trends and themes by analyzing language patterns across multiple companies and sectors.</p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-accent mb-3">Event-Driven Alerts</h3>
                <p>Monitoring news, regulatory announcements, and social media for significant events that might impact investments.</p>
              </div>
            </div>
          </section>
          
          {/* Business Impact Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">Business Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-2xl text-accent">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Research Efficiency</h3>
                  <p className="text-secondary">Reduced initial research time by 60%, allowing analysts to cover 3x more companies with the same resources.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-2xl text-accent">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Enhanced Coverage</h3>
                  <p className="text-secondary">Enabled comprehensive analysis of small and mid-cap stocks that previously received limited attention.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-2xl text-accent">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Insight Discovery</h3>
                  <p className="text-secondary">Identified subtle patterns and connections across sectors that human analysts had overlooked.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-2xl text-accent">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Risk Reduction</h3>
                  <p className="text-secondary">Earlier identification of company-specific risks by analyzing language changes in disclosures.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ProjectDetails>
    </ProjectLayout>
  );
} 