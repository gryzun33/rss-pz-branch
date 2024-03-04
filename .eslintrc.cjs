module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // "no-debugger": "off",
    // "no-console": 0,
    // "class-methods-use-this": "off",
    '@typescript-eslint/no-explicit-any': 2,
  },
};
