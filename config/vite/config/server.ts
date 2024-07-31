import type { ServerOptions } from 'vite';

export const viteConfigServer = (env: Record<string, string>): ServerOptions => {
  const DEV_PORT = JSON.stringify(env.DEV_PORT);

  return {
    port: DEV_PORT ? Number(JSON.parse(DEV_PORT)) : 5173,
  };
};
