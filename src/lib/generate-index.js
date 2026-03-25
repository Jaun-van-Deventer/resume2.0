import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogPostsDirectory = path.resolve(process.cwd(), 'public', 'blog-posts');
const outputFile = path.join(blogPostsDirectory, 'index.json');

// Read all files in the blog-posts directory
const files = fs.readdirSync(blogPostsDirectory);

// Filter out non-markdown files
const markdownFiles = files.filter(file => file.endsWith('.md'));

// Write the list of markdown files to index.json
fs.writeFileSync(outputFile, JSON.stringify(markdownFiles, null, 2));

console.log('Generated index.json:', markdownFiles);