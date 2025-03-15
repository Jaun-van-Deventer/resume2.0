import {__dirname, require} from 'esm';

const fs = require('fs');
const path = require('path');

const blogPostsDirectory = path.join(__dirname, 'public', 'blog-posts');
const outputFile = path.join(blogPostsDirectory, 'index.json');

// Read all files in the blog-posts directory
const files = fs.readdirSync(blogPostsDirectory);

// Filter out non-markdown files
const markdownFiles = files.filter(file => file.endsWith('.md'));

// Write the list of markdown files to index.json
fs.writeFileSync(outputFile, JSON.stringify(markdownFiles, null, 2));

console.log('Generated index.json:', markdownFiles);