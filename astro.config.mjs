export default /** @type {import('astro').AstroUserConfig} */ ({
  // all options are optional; these values are the defaults
  projectRoot: "./",
  public: "./public/",
  dist: "./dist/",
  src: "./src/",
  pages: "./src/pages/",
  buildOptions: {
    site: "https://kkga.me",
    sitemap: true,
  },
  renderers: [
    "@astrojs/renderer-react",
  ],
  vite: {},
});
