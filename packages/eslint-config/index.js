module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "prettier", "react-hooks", "import", "jest"],
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    "jest/globals": true,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "react/self-closing-comp": [
      "warn",
      {
        component: true,
        html: true,
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
      rules: {
        "react/prop-types": "off",
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/no-inferrable-types": 1,
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
      },
    },
  ],
};
