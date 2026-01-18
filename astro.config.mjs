import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://rdonnelly.com',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss({
      base: './src/styles/global.css',
    })],
  },
  output: 'static',
  build: {
    format: 'file',
  },
});
