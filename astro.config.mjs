import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula"
    }
  }), preact()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  redirects: {
    "/": "/notes"
  }
});