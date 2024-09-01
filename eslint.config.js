import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

///////////////////////////////////////////////////////////////////////////////
//                 How to migrate this to new eslint config?                 //
///////////////////////////////////////////////////////////////////////////////

// {
//   files: [
//     "**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}",
//     "cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}",
//   ],
//   extends: ["plugin:cypress/recommended"],
// },
//
// FIXME: fix this error
// /Users/haishengwu/freizl/duyijing/src/App.vue
//   2:10  error  'RouterLink' is defined but never used  @typescript-eslint/no-unused-vars
//   2:22  error  'RouterView' is defined but never used  @typescript-eslint/no-unused-vars

export default [
  {
    ignores: [
      ".gitignore",
      "dist/*",
      ".vscode/*",
      "eslint.config.js",
      ".log/*",
      "public/*",
    ],
  },
  {
    files: ["**/*.{js,ts,vue}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  // ...pluginVue.configs["flat/strongly-recommended"],
  // ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
];
