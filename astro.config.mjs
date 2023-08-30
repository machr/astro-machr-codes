import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [mdx({
    drafts: true
  }), tailwind()],
  experimental: {
    assets: true,
    viewTransitions: true
  }
});