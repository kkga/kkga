module.exports = {
  mode: "jit",
  purge: ["./**/*.{njk,md}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
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
