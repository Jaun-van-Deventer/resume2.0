import fs from 'fs-extra';

fs.copy('dist/index.html', 'dist/404.html')
  .then(() => console.log('404.html created successfully'))
  .catch((err) => console.error('Error copying file:', err));