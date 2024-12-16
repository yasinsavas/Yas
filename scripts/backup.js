import { mkdir, readdir, stat, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Create backup directory if it doesn't exist
const backupDir = join(__dirname, '../backup');

async function createBackupDir() {
  try {
    await mkdir(backupDir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

// Get current timestamp for backup folder name
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const backupPath = join(backupDir, `backup-${timestamp}`);

// Function to copy directory recursively
async function copyDir(src, dest) {
  // Create destination directory
  await mkdir(dest, { recursive: true });
  
  // Read directory contents
  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    // Skip node_modules and .git directories
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'backup') {
      continue;
    }

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

// Start backup process
async function backup() {
  try {
    console.log('Starting project backup...');
    await createBackupDir();
    await mkdir(backupPath);
    await copyDir(join(__dirname, '..'), backupPath);
    console.log(`Backup completed successfully at: ${backupPath}`);
  } catch (err) {
    console.error('Backup failed:', err);
    process.exit(1);
  }
}

backup();