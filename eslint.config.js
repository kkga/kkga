import eslintPluginAstro from "eslint-plugin-astro";
import typescriptEslintParser from "@typescript-eslint/parser";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: typescriptEslintParser,
        extraFileExtensions: [".astro"],
      },
    },
  },
];
