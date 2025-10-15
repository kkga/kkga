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
			theme: "css-variables",
		},
	},
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Fragment Mono",
				cssVariable: "--font-fragment-mono",
        styles: ["normal"],
        fallbacks: ["monospace"],
        
			},
		],
	},
});
