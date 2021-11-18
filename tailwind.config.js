const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./**/*.{njk,md}", "./eleventy.js"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      amber: colors.amber,
    },
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
