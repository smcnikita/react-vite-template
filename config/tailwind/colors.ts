import type { ThemeConfig } from 'tailwindcss/types/config';

type ColorToken = {
  [key: string]: string;
};

export const COLORS_TOKEN: ColorToken = {
  current: 'currentColor',
  transparent: 'transparent',

  white: '#FFFFFF',
  black: '#000000',
};

export const themeColors: ThemeConfig['colors'] = {
  ...COLORS_TOKEN,
};
