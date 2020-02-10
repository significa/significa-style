module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "prettier", "react-hooks", "import"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
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
          ["parent", "sibling", "index"]
        ],
        "newlines-between": "always"
      }
    ]
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint"
      ],
      plugins: ["@typescript-eslint"],
      rules: {
        "react/prop-types": "off",
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/no-inferrable-types": 1,
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
        ]
      }
    }
  ]
};
