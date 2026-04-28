import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    rules: {
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-multi-spaces': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'separate-type-imports',
        },
      ],
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
    },
  },
]);

export default eslintConfig;
