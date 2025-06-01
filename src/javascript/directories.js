import fs from 'fs/promises';

/**
 * Check if the given path is a directory and exists (creates it if it doesn't exist)
 * @param {string} path Path of the directory to check
 */
export async function checkDirectory(path) {
  await fs.stat(path).catch(() => {
    fs.mkdir(path).catch(() => {
      console.error('Failed to create folder', path);
    });
  });
}
