import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";
//import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
  },
  experimental: {
    assets: true,
  },
  integrations: [
    tailwind(), alpinejs(), sitemap(), mdx({
    drafts: true,
  })]
});