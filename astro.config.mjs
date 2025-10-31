// @ts-check
import { defineConfig, fontProviders, sharpImageService } from "astro/config";
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
    responsiveStyles: true,
    layout: "constrained",
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
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
