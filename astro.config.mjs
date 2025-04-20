// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://kkga.me",
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
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "PP Nikkei Pacific",
        cssVariable: "--font-pp-nikkei-pacific",
        variants: [
          {
            weight: "400",
            style: "normal",
            src: [
              "./src/fonts/PPNikkeiPacific-Regular.woff2",
              "./src/fonts/PPNikkeiPacific-Regular.woff",
            ],
          },
        ],
      },
    ],
  },
});
