import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react'
  ],
  rules: {
    // Add any custom rules here
  },
});
