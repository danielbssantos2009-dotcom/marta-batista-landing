const fs = require('fs');
const path = require('path');

const targetDir = __dirname;
const allText = fs.readFileSync(path.join(targetDir, 'all_user_inputs.txt'), 'utf8');
const lines = allText.split('\n');

let currentFile = null;
let currentContent = [];
let currentPathContext = 'src/components/ui'; // default for unmapped tsx files

const fileRegex = /^.*?(?:>|\{\} )?([a-zA-Z0-9_\-\.]+\.(?:tsx|ts|js|jsx|json|css|toml|md|lock)):$/;
const dirRegex = /^([a-zA-Z0-9_\-\.\/]+)>.*$/;

function saveCurrentFile() {
  if (currentFile && currentContent.length > 0) {
    let filePath;
    // Map of known files to their paths
    const knownPaths = {
      'bun.lock': '.',
      'bunfig.toml': '.',
      'components.json': '.',
      'eslint.config.js': '.',
      'package.json': '.',
      'project.json': '.',
      'README.md': '.',
      'tsconfig.json': '.',
      'vite.config.ts': '.',
      'index.tsx': 'src/routes',
      'router.tsx': 'src',
      'routeTree.gen.ts': 'src',
      'server.ts': 'src',
      'start.ts': 'src',
      'style.css': 'src',
      'styles.css': 'src',
      'index.css': 'src'
    };

    if (knownPaths[currentFile]) {
      filePath = path.join(targetDir, knownPaths[currentFile], currentFile);
    } else {
      filePath = path.join(targetDir, currentPathContext, currentFile);
    }

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    
    // Filter out <truncated> and <USER_REQUEST> tags
    const filteredContent = currentContent.filter(l => 
        !l.includes('<truncated') && 
        !l.includes('<USER_REQUEST>') && 
        !l.includes('</USER_REQUEST>') &&
        !l.includes('<ADDITIONAL_METADATA>') &&
        !l.includes('</ADDITIONAL_METADATA>') &&
        !l.includes('The current local time is:') &&
        !l.includes('The user changed setting') &&
        !l.includes('==================== NEXT MESSAGE ====================')
    );

    let content = filteredContent.join('\n').replace(/^\s+|\s+$/g, '');
    
    if (content.length > 0 && !content.startsWith('fodase vou mandar tudo')) {
      fs.writeFileSync(filePath, content);
      console.log(`Saved ${path.relative(targetDir, filePath)}`);
    }
  }
}

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trimRight();
  
  const dirMatch = line.match(dirRegex);
  if (dirMatch && !line.includes('lovable>')) {
     const dirName = dirMatch[1];
     if (dirName.includes('components/ui')) {
       currentPathContext = 'src/components/ui';
     } else if (dirName === 'src') {
       currentPathContext = 'src';
     }
  }

  const fileMatch = line.match(fileRegex);
  if (fileMatch && !line.startsWith('import ') && !line.startsWith('const ') && !line.includes('from ')) {
    saveCurrentFile();
    currentFile = fileMatch[1].trim();
    currentContent = [];
  } else {
    if (currentFile) {
       currentContent.push(line);
    }
  }
}

saveCurrentFile();
