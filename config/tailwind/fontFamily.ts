import type { ThemeConfig } from 'tailwindcss/types/config';

type FontToken = {
  [key: string]: string;
};

export const FONT_FAMILY_TOKEN: FontToken = {
  sans: 'ui-sans-serif',
};

export const themeFontFamily: ThemeConfig['fontFamily'] = {
  sans: [FONT_FAMILY_TOKEN.sans, 'ui-sans-serif', 'system-ui'],
};
