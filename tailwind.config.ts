import { themeColors } from './config/tailwind/colors';
import { themeFontFamily } from './config/tailwind/fontFamily';

import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {},
    fontFamily: themeFontFamily,
    colors: themeColors,
  },
  plugins: [],
} satisfies Config;
