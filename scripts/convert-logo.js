const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../app/icon.svg');
const outputPath = path.join(__dirname, '../public/logo.png');

// Read SVG file
const svgBuffer = fs.readFileSync(svgPath);

// Convert SVG to PNG (512x512 for high quality)
sharp(svgBuffer)
  .resize(512, 512, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 0 }
  })
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log(`✅ Logo converted successfully: ${outputPath}`);
  })
  .catch((err) => {
    console.error('❌ Error converting logo:', err);
    process.exit(1);
  });
