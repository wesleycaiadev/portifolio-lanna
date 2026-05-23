const fs = require('fs');
const file = 'src/lib/projects.ts';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/videoPreview:\s*"[^"]+"/g, 'videoPreview: ""');
content = content.replace(/videoFull:\s*"[^"]+"/g, 'videoFull: ""');
fs.writeFileSync(file, content);
