import fs from 'fs/promises';
import path from 'path';
// import OpenAI from 'openai'; // Removed OpenAI
import { Index } from '@upstash/vector';
// Import getDocument specifically from the legacy build for Node.js
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'; 
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import dotenv from 'dotenv';

// If using ES modules, pdfjs-dist might require setting the worker source manually.
// This might point to the CommonJS worker build if the .mjs one causes issues.
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry.js';
// getDocument({ GlobalWorkerOptions: { workerSrc: pdfjsWorker } });

// Load environment variables from .env file
dotenv.config();

// --- Configuration ---
const CV_PATH = 'public/dean-shabi-cv.pdf';
const APP_FILES_TO_PARSE = [
    'app/layout.tsx',
    'app/page.tsx',
    'app/not-found.tsx'
];
const PROJECTS_DIR = 'app/projects';
const CHUNK_SIZE = 1000; // Characters per chunk
const CHUNK_OVERLAP = 150; // Overlap between chunks
const BATCH_SIZE = 100; // Number of vectors to upsert per request

// --- Initialize Clients ---
// Removed OpenAI client

const index = new Index({
    url: process.env.UPSTASH_VECTOR_REST_URL,
    token: process.env.UPSTASH_VECTOR_REST_TOKEN,
    // Enable automatic embedding generation if available and configured in Upstash console
    // No explicit flag needed here if the index is set up for it.
});

// --- Helper Functions ---

/**
 * Reads text content from various file types (.tsx, .md, .mdx, .txt)
 */
async function readFileContent(filePath) {
    console.log(`Reading file: ${filePath}`);
    try {
        return await fs.readFile(filePath, 'utf-8');
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return null; // Return null to indicate failure
    }
}

/**
 * Parses text content from a PDF file using pdfjs-dist.
 */
async function parsePdf(filePath) {
    console.log(`Parsing PDF using pdfjs-dist legacy build: ${filePath}`);
    try {
        const data = new Uint8Array(await fs.readFile(filePath));
        // Use the directly imported getDocument function
        const loadingTask = getDocument({ data });
        const pdfDocument = await loadingTask.promise;
        console.log(`PDF loaded (${pdfDocument.numPages} pages).`);

        let fullText = '';
        for (let i = 1; i <= pdfDocument.numPages; i++) {
            const page = await pdfDocument.getPage(i);
            const textContent = await page.getTextContent();
            // Join items, ensuring spaces between words/items
            const pageText = textContent.items.map(item => item.str).join(' '); 
            fullText += pageText + '\n\n'; // Add extra newline between pages
        }
        console.log(`Finished parsing PDF: ${filePath}`);
        return fullText.trim();
    } catch (error) {
        console.error(`Error parsing PDF ${filePath} with pdfjs-dist legacy:`, error);
        return null; // Return null to indicate failure
    }
}

/**
 * Finds all .tsx files recursively in a directory.
 */
async function findTsxFiles(dir) {
    let tsxFiles = [];
    try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                tsxFiles = tsxFiles.concat(await findTsxFiles(fullPath));
            } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
                tsxFiles.push(fullPath);
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error);
    }
    return tsxFiles;
}

/**
 * Chunks text using RecursiveCharacterTextSplitter.
 */
async function chunkText(text, source) {
    if (!text) return [];
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: CHUNK_SIZE,
        chunkOverlap: CHUNK_OVERLAP,
    });
    const chunks = await splitter.splitText(text);
    // Add source information to each chunk's metadata later
    return chunks.map(chunk => ({ content: chunk, source }));
}

// Removed generateEmbeddings function

/**
 * Upserts vectors in batches to Upstash Vector.
 */
async function upsertToVectorDB(vectorsToUpsert) { // Renamed parameter for clarity
    if (!vectorsToUpsert || vectorsToUpsert.length === 0) return;
    console.log(`Upserting ${vectorsToUpsert.length} data entries to Upstash Vector...`);

    for (let i = 0; i < vectorsToUpsert.length; i += BATCH_SIZE) {
        const batch = vectorsToUpsert.slice(i, i + BATCH_SIZE);
        console.log(`Upserting batch ${i / BATCH_SIZE + 1}/${Math.ceil(vectorsToUpsert.length / BATCH_SIZE)} (size: ${batch.length})`);
        try {
            // Pass data field for automatic embedding generation by Upstash
            await index.upsert(batch.map(item => ({ id: item.id, data: item.data, metadata: item.metadata })));
        } catch (error) {
            console.error(`Error upserting batch starting at index ${i}:`, error);
        }
    }
    console.log('Upserting complete.');
}

// --- Main Execution ---
async function main() {
    console.log('Starting preprocessing...');

    let allTextChunks = []; // Renamed for clarity

    // 1. Parse CV
    const cvText = await parsePdf(CV_PATH);
    if (cvText) {
        allTextChunks.push(...await chunkText(cvText, CV_PATH));
    }

    // 2. Parse App Files
    for (const filePath of APP_FILES_TO_PARSE) {
        const fileContent = await readFileContent(filePath);
        if (fileContent) {
            allTextChunks.push(...await chunkText(fileContent, filePath));
        }
    }

    // 3. Parse Project Files
    const projectFiles = await findTsxFiles(PROJECTS_DIR);
    for (const filePath of projectFiles) {
        const fileContent = await readFileContent(filePath);
        if (fileContent) {
             allTextChunks.push(...await chunkText(fileContent, filePath));
        }
    }

    if (allTextChunks.length === 0) {
        console.log("No text content found to process. Exiting.");
        return;
    }

    console.log(`Total text chunks created: ${allTextChunks.length}`);

    // Removed embedding generation step

    // 4. Prepare data for Upsert
    const dataToUpsert = allTextChunks.map((chunk, i) => ({
        id: `${chunk.source}-${i}`, // Create a unique ID
        data: chunk.content, // Put content in 'data' field for Upstash embedding
        metadata: { source: chunk.source } // Store original source
    }));

    // 5. Upsert to Upstash Vector
    try {
         // Optional: Reset index before upserting
         console.log("Attempting to reset the index (delete all vectors)... CAUTION! uncomment to enable.");
         // await index.reset();
         // console.log("Index reset.");

        await upsertToVectorDB(dataToUpsert);
        console.log('Preprocessing finished successfully!');
    } catch (error) {
        console.error('An error occurred during the upsert process:', error);
    }
}

main().catch(error => {
    console.error("An unexpected error occurred in the main function:", error);
    process.exit(1);
}); 