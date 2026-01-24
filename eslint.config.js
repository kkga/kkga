import eslintPluginAstro from "eslint-plugin-astro";
import typescriptEslintParser from "@typescript-eslint/parser";

export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: typescriptEslintParser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      "astro/jsx-a11y/media-has-caption": "off",
    },
  },
];
