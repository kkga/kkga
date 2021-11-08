module.exports = {
  mode: "jit",
  purge: ["./**/*.{njk,md}", "./eleventy.js"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      mono: ["Cascadia Code", "JetBrains Mono", "SF Mono", "monospace"],
    },
    fontWeight: {
      normal: 450,
      bold: 800,
    },
    container: {
      center: true,
    },
    listStyleType: {
      none: "none",
      square: "square",
    },
  },
  variants: {
    container: [],
  },
  plugins: [],
};
