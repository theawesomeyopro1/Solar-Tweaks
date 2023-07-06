import extract from 'extract-zip';
import { move } from 'fs-extra';
import fs from 'fs/promises';
import { arch } from 'os';
import { join } from 'path';
import constants from '../constants';
import { downloadAndSaveFile } from './downloader';
import Logger from './logger';
const logger = new Logger('jreDownloader');

/**
 * Download and extract a Java JRE from the given manifest file
 * @param {any} _jre JRE to download
 * @returns {Promise<boolean>} True if successful
 */
export async function downloadJre(_jre) {
  let jre;
  arch() === 'x64' ? (jre = _jre['64']) : (jre = _jre['32']);

  const jresPath = join(constants.SOLARTWEAKS_DIR, 'jres');
  const jrePath = join(jresPath, _jre.name);

  console.log();

  await fs.mkdir(jresPath).catch(() => {
    // Folder already exists, do nothing
  });

  await downloadAndSaveFile(
    jre.url,
    `${jrePath}.zip`,
    'blob',
    jre.checksum,
    'sha256',
    true,
    true
  );

  await extract(`${jrePath}.zip`, { dir: jrePath + '_temp' }).catch(() => {
    logger.error(`Failed to extract ${jrePath}.zip`);
  });

  await move(join(jrePath + '_temp', jre.folder), jrePath, { overwrite: true });
  await fs.rmdir(jrePath + '_temp');
  await fs.rm(`${jrePath}.zip`);

  return true;
}

/**
 * Delete a downloaded JRE
 */
export async function removeJre(jreName) {
  await fs.rm(join(constants.SOLARTWEAKS_DIR, 'jres', jreName), {
    recursive: true,
    force: true,
  });
  logger.info(`Removed JRE ${jreName}`);
}
