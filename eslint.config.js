export default [
  {
    languageOptions: {
      parser: "@typescript-eslint/parser",
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "never"],
      "prettier/prettier": "error",
    },
  },
]
