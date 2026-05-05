import fs from 'fs';
import path from 'path';

// The path to the uploaded photo
const sourcePath = "C:\\Users\\Engineer Ali\\.gemini\\antigravity\\brain\\4135533b-6ecb-4f1d-8593-24fce8d98928\\media__1777955501806.jpg";

// The destination path in the public folder
const publicDir = path.join(process.cwd(), 'public');
const destPath = path.join(publicDir, 'profile.jpg');

// Create public folder if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('✅ Public folder created.');
}

// Copy the file
try {
  fs.copyFileSync(sourcePath, destPath);
  console.log('✅ Photo successfully copied and renamed to profile.jpg!');
  console.log('👉 Ab aap website check kar sakte hain.');
} catch (error) {
  console.error('❌ Error copying photo:', error.message);
}
