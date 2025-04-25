import fs from 'fs/promises';
import fsc from 'fs'; // Need synchronous methods for pdfkit stream
import path from 'path';
import PDFDocument from 'pdfkit';

// --- Configuration ---
const PROJECTS_DIR = 'app/projects';
// Look for page.tsx files as the main content source
const PROJECT_FILE_SUFFIX = 'page.tsx'; 
const OUTPUT_PDF_PATH = 'public/projects_summary.pdf';

// --- Helper Functions ---

/**
 * Finds all project content files recursively in a directory.
 */
async function findProjectFiles(dir) {
    let projectFiles = [];
    try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                projectFiles = projectFiles.concat(await findProjectFiles(fullPath));
            } else if (entry.isFile() && entry.name.endsWith(PROJECT_FILE_SUFFIX)) {
                projectFiles.push(fullPath);
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error);
    }
    return projectFiles;
}

/**
 * Reads text content from a file.
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
 * Attempts to clean TSX/JSX content to extract plain text.
 * This is a basic cleaning and might not be perfect.
 */
function cleanTsxContent(content) {
    if (!content) return '';

    let cleaned = content;

    // Remove imports/exports (simple version)
    cleaned = cleaned.replace(/^import .* from .*;?$/gm, '');
    cleaned = cleaned.replace(/^export .*$/gm, '');

    // Remove single-line comments
    cleaned = cleaned.replace(/\/\/.*$/gm, '');

    // Remove multi-line comments
    cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//gm, '');

    // Remove common component lifecycle/hooks/declarations (basic)
    cleaned = cleaned.replace(/^\s*('use client'|const|let|var|useEffect|useState|useRef|useMemo|useCallback|function|type|interface|declare|return|=>).*$/gm, '');

    // Remove JSX tags (attempt to keep content)
    // This is complex. A simpler approach is to remove tags entirely.
    // Keep content between tags: <tag>content</tag> -> content
    // Remove self-closing tags: <tag />
    cleaned = cleaned.replace(/<\/?[^>]+(>|$)/g, " "); // Replace tags with space

    // Remove JS expressions in braces (simple version)
    cleaned = cleaned.replace(/{[^{}]*?}/g, ''); // Remove simple {} blocks
    // Attempt to remove more complex blocks (might be overly aggressive)
    cleaned = cleaned.replace(/{[\s\S]*?}/gm, '');

    // Remove leftover React/HTML entities (basic)
    cleaned = cleaned.replace(/&[a-zA-Z]+;/g, ' ');

    // Normalize whitespace
    cleaned = cleaned.replace(/\s\s+/g, ' '); // Multiple spaces to one
    cleaned = cleaned.replace(/^\s*$/gm, ''); // Remove empty lines
    cleaned = cleaned.replace(/\n\s*\n/g, '\n\n'); // Reduce multiple newlines

    return cleaned.trim();
}


// --- Main Execution ---
async function main() {
    console.log('Starting project PDF generation...');

    const projectFiles = await findProjectFiles(PROJECTS_DIR);

    if (projectFiles.length === 0) {
        console.log(`No project files ending with '${PROJECT_FILE_SUFFIX}' found in ${PROJECTS_DIR}. Exiting.`);
        return;
    }

    console.log(`Found ${projectFiles.length} project files.`);

    // Create a new PDF document
    const doc = new PDFDocument({ autoFirstPage: false });

    // Setup stream to write PDF to file
    // Ensure the directory exists (though 'public' should)
    await fs.mkdir(path.dirname(OUTPUT_PDF_PATH), { recursive: true });
    const stream = fsc.createWriteStream(OUTPUT_PDF_PATH);
    doc.pipe(stream);

    console.log(`Generating PDF: ${OUTPUT_PDF_PATH}`);

    // Add a title page (optional)
    doc.addPage();
    doc.fontSize(24).text('Project Summaries', { align: 'center' });
    doc.moveDown(2);

    // Process each project file
    for (const filePath of projectFiles) {
        const rawContent = await readFileContent(filePath);
        if (!rawContent) continue;

        const cleanedContent = cleanTsxContent(rawContent);

        if (cleanedContent.length < 20) { // Skip if cleaning resulted in very little text
            console.log(`Skipping ${filePath} (minimal content after cleaning).`);
            continue;
        }

        // Extract a potential title from the file path
        const projectName = path.basename(path.dirname(filePath)); // Get parent folder name
        const title = projectName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Capitalize

        console.log(`Adding content from: ${title} (${filePath})`);

        // Add new page for each project
        doc.addPage();
        doc.fontSize(18).text(title, { underline: true });
        doc.moveDown();
        doc.fontSize(11).text(cleanedContent, { align: 'left' });
    }

    // Finalize the PDF and end the stream
    doc.end();

    // Wait for the stream to finish writing
    await new Promise((resolve, reject) => {
        stream.on('finish', resolve);
        stream.on('error', reject);
    });

    console.log(`PDF generation complete: ${OUTPUT_PDF_PATH}`);
}

main().catch(error => {
    console.error("An error occurred during PDF generation:", error);
    process.exit(1);
}); 