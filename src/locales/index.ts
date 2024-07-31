import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './lang/en/lang.json';

import { DEFAULT_LANG_KEY } from '@/constants/lang';

const resources = {
  en: {
    translation: Object.assign(en),
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: import.meta.env.VITE_APP_LANG ?? DEFAULT_LANG_KEY,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
