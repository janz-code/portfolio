// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  i18n: {
      locales: ["en", "es"],
      defaultLocale: "en",
      routing: {
          prefixDefaultLocale: true,
          fallbackType: "redirect",
          redirectToDefaultLocale: true,
      }
  },

  prefetch: {
      defaultStrategy: "hover",
      prefetchAll: true
  },

  trailingSlash: "ignore",
  compressHTML: false,
  devToolbar: {enabled: false},
  image: {responsiveStyles: true},
  security: {checkOrigin: true},
  output: "server",
  adapter: vercel(),
  integrations: [react()]
});