module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "plugin:react/recommended",
    "eslint:recommended"
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "no-extra-parens": ["error", "all", { returnAssign: true }]
  }
};
