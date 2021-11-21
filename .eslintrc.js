module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.PRE_COMMIT
      ? ["error", { allow: ["warn", "error"] }]
      : "off",
    "no-debugger": process.env.PRE_COMMIT ? "error" : "off",
  },
};
