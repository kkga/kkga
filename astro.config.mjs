// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import fs from "node:fs";
import path from "node:path";

import sitemap from "@astrojs/sitemap";

/**
 * @returns {any}
 */
function videoMetadata() {
  let metadata = {};

  try {
    const metadataPath = path.resolve("src/data/video-metadata.json");
    metadata = JSON.parse(fs.readFileSync(metadataPath, "utf-8"));
  } catch (e) {
    console.warn("[video-metadata] Could not load video-metadata.json");
  }

  return {
    name: "video-metadata",
    enforce: "post", // Run after Vite's default asset handling
    /**
     * @param {string} code
     * @param {string} id
     */
    transform(code, id) {
      if (!id.endsWith(".mp4")) return;

      const match = code.match(/export default "(.+)"/);
      if (!match) return;

      const src = match[1];

      // Find metadata by checking if any key ends with the same relative path
      const metaEntry = Object.entries(metadata).find(([key]) => id.endsWith(key));

      if (metaEntry) {
        const [, dims] = metaEntry;
        return {
          code: `export default { src: "${src}", width: ${dims.width}, height: ${dims.height} };`,
          map: null,
        };
      }
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://kkga.me",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss(), videoMetadata()],
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
