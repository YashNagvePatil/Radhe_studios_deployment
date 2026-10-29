const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicHtaccess = path.resolve(__dirname, '../public/.htaccess');
const outHtaccess = path.resolve(__dirname, '../out/.htaccess');
const outDir = path.resolve(__dirname, '../out');
const zipFile = path.resolve(__dirname, '../hostinger_deploy.zip');

// 1. Copy .htaccess into out directory
if (fs.existsSync(publicHtaccess)) {
  fs.copyFileSync(publicHtaccess, outHtaccess);
  console.log('✓ Copied public/.htaccess to out/.htaccess');
} else {
  console.warn('⚠ public/.htaccess not found');
}

// 2. Create hostinger_deploy.zip using tar to ensure Linux-compatible forward slashes (/)
try {
  if (fs.existsSync(zipFile)) {
    fs.unlinkSync(zipFile);
  }
  // Run tar inside out/ folder so entries use forward slashes (/) and contain .htaccess
  execSync(`tar -a -cf "${zipFile}" * .htaccess`, { cwd: outDir, stdio: 'inherit' });
  console.log('✓ Successfully created Linux-compatible hostinger_deploy.zip with forward slashes (/)!');
} catch (err) {
  console.error('⚠ Failed to generate hostinger_deploy.zip:', err.message);
}
