import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
   globalIgnores(["dist"]),
   {
      files: ["**/*.{ts,tsx}"],
      extends: [
         js.configs.recommended,
         tseslint.configs.recommended,
         reactHooks.configs.flat.recommended,
         reactRefresh.configs.vite,
      ],
      languageOptions: {
         ecmaVersion: 2020,
         globals: globals.browser,
      },
   },
   // Feature-Sliced Design (FSD) Strict Layer Hierarchy Enforcement
   // Order: app -> pages -> widgets -> features -> entities -> shared
   {
      files: ["src/shared/**/*.{ts,tsx}"],
      rules: {
         "no-restricted-imports": [
            "error",
            {
               patterns: [
                  {
                     group: [
                        "@/entities/*",
                        "@/entities/**",
                        "@/features/*",
                        "@/features/**",
                        "@/widgets/*",
                        "@/widgets/**",
                        "@/pages/*",
                        "@/pages/**",
                        "@/app/*",
                        "@/app/**",
                     ],
                     message:
                        "FSD violation: 'shared' layer cannot import from upper layers (entities, features, widgets, pages, app).",
                  },
               ],
            },
         ],
      },
   },
   {
      files: ["src/entities/**/*.{ts,tsx}"],
      rules: {
         "no-restricted-imports": [
            "error",
            {
               patterns: [
                  {
                     group: [
                        "@/features/*",
                        "@/features/**",
                        "@/widgets/*",
                        "@/widgets/**",
                        "@/pages/*",
                        "@/pages/**",
                        "@/app/*",
                        "@/app/**",
                     ],
                     message:
                        "FSD violation: 'entities' layer can only import from 'shared'.",
                  },
               ],
            },
         ],
      },
   },
   {
      files: ["src/features/**/*.{ts,tsx}"],
      rules: {
         "no-restricted-imports": [
            "error",
            {
               patterns: [
                  {
                     group: [
                        "@/widgets/*",
                        "@/widgets/**",
                        "@/pages/*",
                        "@/pages/**",
                        "@/app/*",
                        "@/app/**",
                     ],
                     message:
                        "FSD violation: 'features' layer can only import from 'entities' and 'shared'.",
                  },
               ],
            },
         ],
      },
   },
   {
      files: ["src/widgets/**/*.{ts,tsx}"],
      rules: {
         "no-restricted-imports": [
            "error",
            {
               patterns: [
                  {
                     group: ["@/pages/*", "@/pages/**", "@/app/*", "@/app/**"],
                     message:
                        "FSD violation: 'widgets' layer can only import from 'features', 'entities', and 'shared'.",
                  },
               ],
            },
         ],
      },
   },
   {
      files: ["src/pages/**/*.{ts,tsx}"],
      rules: {
         "no-restricted-imports": [
            "error",
            {
               patterns: [
                  {
                     group: ["@/app/*", "@/app/**"],
                     message:
                        "FSD violation: 'pages' layer cannot import from 'app' layer.",
                  },
               ],
            },
         ],
      },
   },
]);
