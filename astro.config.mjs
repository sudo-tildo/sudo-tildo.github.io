// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import embeds from 'astro-embed/integration';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sudo-tildo.github.io',
  integrations: [sitemap(), react(), embeds(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});