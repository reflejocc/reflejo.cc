import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://example.com';
export default defineConfig({
  site: SITE_URL,
  base: '/',
  envPrefix: 'PUBLIC_',
  output: 'static',
  integrations: [
      mdx(),
      sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
      langs: ["javascript", "typescript", "plaintext"]
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern",
      },
    },
  },
})