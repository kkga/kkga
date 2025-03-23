// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: sharpImageService({ limitInputPixels: false }),
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
