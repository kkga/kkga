// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kkga.me",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: sharpImageService({ limitInputPixels: false }),
    responsiveStyles: true,
    layout: "constrained",
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Fragment Mono Regular",
        cssVariable: "--font-fragment-mono",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/fonts/FragmentMono-Regular.woff2"],
          },
        ],
        fallbacks: ["monospace"],
      },
    ],
  },
});
