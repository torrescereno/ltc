import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dracula" },
    }),
  ],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  redirects: {
    "/": "/notes",
  },
});
