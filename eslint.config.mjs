import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        // Node.js globals
        process: 'readonly',
        React: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@next/next': nextPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-dom': reactDom,
      import: importPlugin,
    },
    rules: {
      // Core rules
      'no-undef': 'off',
      'no-unused-vars': 'off',

      // Next.js rules
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,

      // React rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'off',

      // TypeScript rules
      'ts/consistent-type-imports': 'off',

      // Other rules
      'react/no-missing-key': 'off',
      curly: 'off',
      'node/prefer-global/process': 'off',

      // Line length rule
      'max-len': [
        'error',
        {
          code: 100,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
        },
      ],

      // React DOM rules - explicitly disable problematic ones
      'react-dom/no-dangerously-set-innerhtml': 'off',
      'react-dom/no-unsafe-iframe-sandbox': 'off',

      // Import ordering rules
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'type'],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: '@mui/**', group: 'external', position: 'after' },
            { pattern: '@/config/**', group: 'internal', position: 'before' },
            { pattern: '@/features/**', group: 'internal' },
            { pattern: '@/sanity/**', group: 'internal' },
            { pattern: '@/shared/**', group: 'internal' },
            { pattern: '@/lib/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/first': 'error',
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'error',
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        process: 'readonly',
        React: 'readonly',
      },
    },
    plugins: {
      '@next/next': nextPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-dom': reactDom,
    },
    rules: {
      // Core rules
      'no-undef': 'off',
      'no-unused-vars': 'off',

      // Next.js rules
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,

      // React rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'off',

      // Other rules
      'react/no-missing-key': 'off',
      curly: 'off',
      'node/prefer-global/process': 'off',

      // Line length rule
      'max-len': [
        'error',
        {
          code: 100,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
        },
      ],

      // React DOM rules - explicitly disable problematic ones
      'react-dom/no-dangerously-set-innerhtml': 'off',
      'react-dom/no-unsafe-iframe-sandbox': 'off',
    },
  },
  {
    ignores: [
      'migrations/**/*',
      'next-env.d.ts',
      'node_modules/**/*',
      '.next/**/*',
      '*.yml',
      '*.yaml',
      '**/*.yml',
      '**/*.yaml',
      'public/sw.js',
      'public/sw.js.map',
      'public/workbox-*.js',
      'public/workbox-*.js.map',
    ],
  },
];
