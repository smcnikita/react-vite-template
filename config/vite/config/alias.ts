import { fileURLToPath, URL } from 'node:url';

import type { AliasOptions } from 'vite';

const SRC_FOLDER = './../../../src';
const CONFIG_FOLDER = './../../../config';

export const viteConfigAlias: AliasOptions = {
  '@': fileURLToPath(new URL(SRC_FOLDER, import.meta.url)),
  '@config': fileURLToPath(new URL(CONFIG_FOLDER, import.meta.url)),
};
