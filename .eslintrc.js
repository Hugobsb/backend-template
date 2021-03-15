module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb-base',
    'airbnb-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: [__dirname + '/tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
