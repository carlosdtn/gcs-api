const RULES = {
  OFF: "off",
  ERROR: "error",
  WARN: "warn",
};

module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: ["eslint:recommended", "prettier"],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    "no-console": RULES.WARN,
    "no-unused-vars": RULES.WARN,
  },
};
