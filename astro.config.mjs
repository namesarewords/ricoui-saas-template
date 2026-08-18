import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const siteUrl =
  import.meta.env.PUBLIC_SITE_URL || "https://borderless.namesarewords.workers.dev/";

export default defineConfig({
  site: siteUrl,
  output: "static",
  base: "/",
  envPrefix: "PUBLIC_",

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },

  server: {
    port: 5200,
  },

  integrations: [mdx(), sitemap()],
});
