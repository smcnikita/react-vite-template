import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';

import { ViteMinifyPlugin } from 'vite-plugin-minify';

import { vitePluginAnalytics } from './config/vite/plugins/analytics';

import { viteConfigBuild } from './config/vite/config/build';
import { viteConfigAlias } from './config/vite/config/alias';
import { viteConfigServer } from './config/vite/config/server';
import { viteConfigTest } from './config/vite/config/test';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const VITE_USE_ANALYTICS = JSON.stringify(env.VITE_USE_ANALYTICS);

  return {
    plugins: [react(), ViteMinifyPlugin({}), vitePluginAnalytics(VITE_USE_ANALYTICS)],

    server: viteConfigServer(env),

    resolve: {
      alias: viteConfigAlias,
    },

    css: {
      devSourcemap: true,
    },

    build: viteConfigBuild,

    test: viteConfigTest,
  };
});
