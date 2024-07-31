/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Application title */
  readonly VITE_APP_TITLE: string;
  /** Application description */
  readonly VITE_APP_DESCRIPTION: string;
  /** Use analytics? */
  readonly VITE_USE_ANALYTICS: 'true' | 'false';
  /** Default application lang */
  readonly VITE_APP_LANG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
