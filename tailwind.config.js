module.exports = {
  mode: "jit",
  purge: ["./**/*.{njk,md}"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    fontWeight: {
      normal: 450,
      bold: 800,
    },
    container: {
      center: true,
    },
  },
  variants: {
    container: [],
  },
  plugins: [],
};
