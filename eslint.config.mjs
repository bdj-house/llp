import antfu from "@antfu/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";
import prettierPlugin from "eslint-config-prettier";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default antfu(
  {
    react: true,
    typescript: true,
    lessOpinionated: true,
    isInEditor: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "single",
    },
    formatters: {
      css: true,
    },
    ignores: [
      "migrations/**/*",
      "next-env.d.ts",
      "node_modules/**/*",
      ".next/**/*",
    ],
  },
  {
    plugins: {
      "@next/next": nextPlugin,
      prettier: prettierPlugin,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      ...prettierPlugin.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "style/jsx-self-closing-comp": "error",
      "ts/consistent-type-imports": "off",
      "react/no-missing-key": "off",
    },
  }
);
