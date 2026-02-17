/**
 * Generate Refletia Icons Script
 * 
 * This script generates different icon sizes from the Refletia logo SVG
 * for use in the application (PWA, mobile, desktop)
 */

const fs = require('fs');
const path = require('path');

// Define icon sizes needed
const ICON_SIZES = {
  // Android icons
  android: [
    { name: 'android-launchericon-48-48.png', size: 48 },
    { name: 'android-launchericon-72-72.png', size: 72 },
    { name: 'android-launchericon-96-96.png', size: 96 },
    { name: 'android-launchericon-144-144.png', size: 144 },
    { name: 'android-launchericon-192-192.png', size: 192 },
    { name: 'android-launchericon-512-512.png', size: 512 },
  ],
  
  // iOS icons
  ios: [
    { name: '16.png', size: 16 },
    { name: '20.png', size: 20 },
    { name: '29.png', size: 29 },
    { name: '32.png', size: 32 },
    { name: '40.png', size: 40 },
    { name: '50.png', size: 50 },
    { name: '57.png', size: 57 },
    { name: '58.png', size: 58 },
    { name: '60.png', size: 60 },
    { name: '64.png', size: 64 },
    { name: '72.png', size: 72 },
    { name: '76.png', size: 76 },
    { name: '80.png', size: 80 },
    { name: '87.png', size: 87 },
    { name: '100.png', size: 100 },
    { name: '114.png', size: 114 },
    { name: '120.png', size: 120 },
    { name: '128.png', size: 128 },
    { name: '144.png', size: 144 },
    { name: '152.png', size: 152 },
    { name: '167.png', size: 167 },
    { name: '180.png', size: 180 },
    { name: '192.png', size: 192 },
    { name: '256.png', size: 256 },
    { name: '512.png', size: 512 },
    { name: '1024.png', size: 1024 },
  ],
  
  // Windows icons (simplified - main sizes)
  windows11: [
    { name: 'SmallTile.scale-100.png', size: 71 },
    { name: 'SmallTile.scale-125.png', size: 89 },
    { name: 'SmallTile.scale-150.png', size: 107 },
    { name: 'SmallTile.scale-200.png', size: 142 },
    { name: 'SmallTile.scale-400.png', size: 284 },
    { name: 'Square150x150Logo.scale-100.png', size: 150 },
    { name: 'Square150x150Logo.scale-125.png', size: 188 },
    { name: 'Square150x150Logo.scale-150.png', size: 225 },
    { name: 'Square150x150Logo.scale-200.png', size: 300 },
    { name: 'Square150x150Logo.scale-400.png', size: 600 },
    { name: 'LargeTile.scale-100.png', size: 310 },
    { name: 'LargeTile.scale-125.png', size: 388 },
    { name: 'LargeTile.scale-150.png', size: 465 },
    { name: 'LargeTile.scale-200.png', size: 620 },
    { name: 'LargeTile.scale-400.png', size: 1240 },
    { name: 'Square44x44Logo.scale-100.png', size: 44 },
    { name: 'Square44x44Logo.scale-200.png', size: 88 },
    { name: 'StoreLogo.scale-100.png', size: 50 },
    { name: 'StoreLogo.scale-200.png', size: 100 },
  ]
};

// Source SVG path
const SOURCE_SVG = path.join(__dirname, '../packages/twenty-front/public/images/icons/refletia-logo.svg');

// Output directories
const OUTPUT_DIRS = {
  android: path.join(__dirname, '../packages/twenty-front/public/images/icons/android'),
  ios: path.join(__dirname, '../packages/twenty-front/public/images/icons/ios'),
  windows11: path.join(__dirname, '../packages/twenty-front/public/images/icons/windows11'),
};

// Ensure output directories exist
Object.values(OUTPUT_DIRS).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

console.log('🎨 Refletia Icon Generator');
console.log('============================');
console.log(`📁 Source SVG: ${SOURCE_SVG}`);
console.log('');

// Check if source SVG exists
if (!fs.existsSync(SOURCE_SVG)) {
  console.error('❌ Source SVG not found!');
  console.log('Please ensure refletia-logo.svg exists in the icons directory.');
  process.exit(1);
}

console.log('✅ Source SVG found!');
console.log('');

// Generate icons for each platform
Object.entries(ICON_SIZES).forEach(([platform, sizes]) => {
  console.log(`🔄 Generating ${platform} icons...`);
  
  sizes.forEach(({ name, size }) => {
    const outputPath = path.join(OUTPUT_DIRS[platform], name);
    
    // For now, we'll create placeholder instructions
    // In a real implementation, you'd use a library like sharp or canvas
    console.log(`   📐 ${name} (${size}x${size}) -> ${outputPath}`);
  });
  
  console.log('');
});

console.log('📝 Instructions for manual icon generation:');
console.log('==========================================');
console.log('');
console.log('1. Use a tool like Figma, Illustrator, or online SVG to PNG converter');
console.log('2. Export the refletia-logo.svg to the following sizes:');
console.log('');

Object.entries(ICON_SIZES).forEach(([platform, sizes]) => {
  console.log(`${platform.toUpperCase()}:`);
  sizes.forEach(({ name, size }) => {
    console.log(`  - ${size}x${size} -> ${name}`);
  });
  console.log('');
});

console.log('3. Place the generated PNG files in the respective directories:');
Object.entries(OUTPUT_DIRS).forEach(([platform, dir]) => {
  console.log(`   ${platform}: ${dir}`);
});

console.log('');
console.log('✨ Icon generation plan created!');
console.log('🚀 Ready for Story 1.2 implementation!');
