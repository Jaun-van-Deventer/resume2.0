import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import('./copy-files.js');

const cnamePath = path.join(__dirname, 'dist', 'CNAME');
fs.writeFileSync(cnamePath, 'www.goresume.co.za');

console.log('Post-build tasks completed!');
