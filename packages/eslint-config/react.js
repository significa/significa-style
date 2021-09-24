module.exports = {
  extends: ["plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  plugins: ["react", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/self-closing-comp": [
      "warn",
      {
        component: true,
        html: true,
      },
    ],
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
