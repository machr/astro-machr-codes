import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [mdx({
    drafts: true
  }), image()],
  experimental: {
    assets: true
  }
});