const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{md,astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.stone,
      accent: colors.teal,
    },
    fontFamily: {
      sans: [
        "MD Nichrome",
        "sans-serif",
      ],
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
      black: 800,
      ultra: 900,
    },
    container: {
      center: true,
    },
    extend: {
      gridTemplateColumns: {
        "main": "minmax(0, 1fr) minmax(0,88ch) minmax(0,1fr)",
        "header": "minmax(0, 1fr) minmax(0,64ch) minmax(0,24ch) minmax(0,1fr)",
      },
      backgroundImage: {
        "dust": "url(/img/dust-dark.png)",
      },
    },
  },
  variants: {
    container: [],
  },
  plugins: [],
};

// vim:ft=javascript
