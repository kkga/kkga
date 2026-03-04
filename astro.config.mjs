// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import { spawnSync } from "node:child_process";
import ffmpegPath from "ffmpeg-static";

import sitemap from "@astrojs/sitemap";

/**
 * @returns {import('astro').ViteUserConfig['plugins'] extends Array<infer P> ? P : any}
 */
function videoMetadata() {
  /** @type {Record<string, { width: number, height: number }>} */
  const cache = {};

  return {
    name: "video-metadata",
    enforce: "post",
    /**
     * @param {string} code
     * @param {string} id
     */
    transform(code, id) {
      if (!id.endsWith(".mp4")) return;

      const match = code.match(/export default "(.+)"/);
      if (!match) return;

      const src = match[1];

      if (!cache[id]) {
        try {
          if (!ffmpegPath) {
            throw new Error("ffmpeg-static path not found");
          }
          const result = spawnSync(ffmpegPath, ["-i", id], {
            encoding: "utf-8",
          });
          const output = result.stderr || result.stdout;
          const dimensions = output?.match(/Video:.*,\s*(\d+)x(\d+)/);

          if (dimensions) {
            const [, width, height] = dimensions;
            cache[id] = {
              width: parseInt(width),
              height: parseInt(height),
            };
          }
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          console.warn(`[video-metadata] Failed to process ${id}:`, message);
        }
      }

      if (cache[id]) {
        const dims = cache[id];
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
