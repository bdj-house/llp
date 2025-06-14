import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';

export default antfu(
  {
    react: true,
    typescript: true,
    lessOpinionated: true,
    isInEditor: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: 'single',
    },
    formatters: {
      css: true,
      markdown: 'prettier',
    },
    ignores: [
      'migrations/**/*',
      'next-env.d.ts',
      'node_modules/**/*',
      '.next/**/*',
      '*.yml',
      '*.yaml',
      '**/*.yml',
      '**/*.yaml',
    ],
  },
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'style/jsx-self-closing-comp': 'error',
      'ts/consistent-type-imports': 'off',
      'react/no-missing-key': 'off',
      'style/max-statements-per-line': 'off',
      'curly': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
);
