import type { BuildOptions } from 'vite';

import { dependencies } from '../../../package.json';

import { renderChunks } from '../renderChunks';

const chunkSizeWarningLimit = 1600;

export const viteConfigBuild: BuildOptions = {
  sourcemap: false,
  chunkSizeWarningLimit,
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-router-dom', 'react-dom'],
        ...renderChunks(dependencies),
      },
    },
  },
};
