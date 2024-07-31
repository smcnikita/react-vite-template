import { fileURLToPath } from 'node:url';
import { configDefaults } from 'vitest/config';

import type { InlineConfig } from 'vitest';

const ROOT_FOLDER = './../../..';

export const viteConfigTest: InlineConfig = {
  globals: true,

  environment: 'jsdom',

  exclude: [...configDefaults.exclude, 'e2e/**'],

  root: fileURLToPath(new URL(ROOT_FOLDER, import.meta.url)),

  setupFiles: './config/tests/setup.ts',

  include: ['src/**/*.test.?(ts|tsx)'],

  coverage: {
    provider: 'v8',
    include: ['src'],
    exclude: ['src/main.tsx', 'src/spaghetti.ts', 'src/utils/browserGlobalTheme.ts', 'src/components/icons'],
  },
};
