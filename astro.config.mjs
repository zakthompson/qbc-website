import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["@astro-community/astro-embed-youtube"],
    },
  },
  output: "server",
  adapter: vercel(),
});
