import { LANG_KEY_STORAGE_KEY } from './localStorage';

export enum LANG_KEYS {
  en = 'en',
}

export const DEFAULT_LANG_KEY = localStorage[LANG_KEY_STORAGE_KEY] ?? LANG_KEYS.en;
