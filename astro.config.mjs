// @ts-check
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  i18n: {
      locales: ["en", "es"],
      defaultLocale: 'en',
      routing: {
          fallbackType: "redirect",
          prefixDefaultLocale: true,
          redirectToDefaultLocale: true,
          strategy: "pathname"
      },
  },

  compressHTML: true,
  devToolbar: {enabled: false},
  output: "server",

  prefetch: {
      prefetchAll: true,
      defaultStrategy: "viewport"
  },

  security: {
      checkOrigin: true,
  },

  redirects:{
      '/blog': {
          status: 302,
          destination: ""
      }
  },

  scopedStyleStrategy: "class",
  adapter: vercel(),
  integrations: [sitemap(), db()],
});