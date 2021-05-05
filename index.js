module.exports = {
  extends: ['@hellabyte/eslint-config-base'],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },

  rules: {},

  overrides: [
    {
      files: [
        '**/tests/**/*.js',
        '**/tests/**/*.jsx',
        '**/tests/**/*.ts',
        '**/tests/**/*.tsx',
        '**/*.test.ts',
        '**/*.spec.ts',
        '**/*.test.tsx',
        '**/*.spec.tsx',
      ],

      rules: {},
    },
  ],
};
