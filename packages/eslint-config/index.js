/*
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier", "import", "jest"],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    "jest/globals": true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/default": "off",
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
  },
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        tsconfigRootDir: __dirname,
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:prettier/recommended",
      ],
      plugins: ["prettier", "jest", "@typescript-eslint"],
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            project: "./tsconfig.json",
          },
        },
      },
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
