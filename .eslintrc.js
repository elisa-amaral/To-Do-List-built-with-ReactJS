module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': 'off',
    'react/state-in-constructor': 'off',
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'no-useless-return': 'off',
    'react/forbid-prop-types': 'off',

    // 'react/react-in-jsx-scope': 'off',
  },
}
