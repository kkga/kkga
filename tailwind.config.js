module.exports = {
  mode: "jit",
  purge: ["./**/*.{njk,md}", "./eleventy.js"],
  theme: {
    fontFamily: {
      sans: ["MD Nichrome", "sans-serif"],
      mono: [
        "MD IO",
        "Cascadia Code",
        "JetBrains Mono",
        "SF Mono",
        "monospace",
      ],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    container: {
      center: true,
    },
    listStyleType: {
      none: "none",
      square: "square",
      decimal: "decimal",
    },
  },
  variants: {
    container: [],
  },
  plugins: [],
};
