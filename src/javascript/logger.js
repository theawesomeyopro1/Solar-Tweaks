import { createWriteStream } from 'fs';
import fs from 'fs/promises';
import { join } from 'path';
import constants from '../constants';

/**
 * Log system used to log messages to the console and to the log file
 */
export default class Logger {
  constructor(name) {
    this.name = name;
    this.logger = console;
  }

  debug(...args) {
    const x = `[${this.name}]`;
    this.logger.debug(x, ...args);
    this.writeLog(`[DEBUG] ${x} ${[...args].join(' ')}`);
  }

  info(...args) {
    const x = `[${this.name}]`;
    this.logger.info(x, ...args);
    this.writeLog(`[INFO] ${x} ${[...args].join(' ')}`);
  }

  warn(...args) {
    const x = `[${this.name}]`;
    this.logger.warn(x, ...args);
    this.writeLog(`[WARN] ${x} ${[...args].join(' ')}`);
  }

  error(...args) {
    const x = `[${this.name}]`;
    this.logger.error(x, ...args);
    this.writeLog(`[ERROR] ${x} ${[...args].join(' ')}`);
  }

  /**
   * Write log to file
   * @param {any} log
   */
  async writeLog(log) {
    await fs.appendFile(
      join(constants.SOLARTWEAKS_DIR, 'logs', 'launcher-latest.log'),
      `${log}\n`
    );
  }
}

export async function createMinecraftLogger(version) {
  const logFile = join(
    constants.SOLARTWEAKS_DIR,
    'logs',
    `${version}-latest.log`
  );

  await fs.writeFile(logFile, ''); // Clear the file and creates it if it doesn't exist

  return createWriteStream(logFile, { encoding: 'utf8' });
}

/**
 * Clears the log file
 */
export async function clearLogs() {
  // Delete old log file for cleaning purposes
  await fs
    .unlink(join(constants.SOLARTWEAKS_DIR, 'logs', 'latest.log'))
    .catch(() => {});

  await fs.writeFile(
    join(constants.SOLARTWEAKS_DIR, 'logs', 'launcher-latest.log'),
    ''
  );
}
