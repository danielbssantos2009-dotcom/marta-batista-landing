const fs = require('fs');
const path = require('path');

const transcriptPath = 'C:\\Users\\nathan\\.gemini\\antigravity\\brain\\e39a53b0-be3a-4297-a4da-a938e2a3e70f\\.system_generated\\logs\\transcript_full.jsonl';
const targetDir = 'C:\\Users\\nathan\\.gemini\\antigravity\\scratch\\marta-batista';

const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
let userInputs = [];

for (const line of lines) {
  if (!line) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT') {
      userInputs.push(obj.content);
    }
  } catch (e) {}
}

const allText = userInputs.join('\n\n==================== NEXT MESSAGE ====================\n\n');
fs.writeFileSync(path.join(targetDir, 'all_user_inputs.txt'), allText);
console.log("Extracted all user inputs to all_user_inputs.txt");
