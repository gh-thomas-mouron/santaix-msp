// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gh-thomas-mouron.github.io',
  base: '/santaix-msp',
  vite: {
    plugins: [tailwindcss()]
  }
});
