module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-len': ['error', { code: 120 }],
    'react/jsx-one-expression-per-line': 'off',
    'import/no-unresolved': 0,
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    semi: ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: { multiline: true },
        ImportDeclaration: { multiline: true },
        ExportDeclaration: { multiline: true },
      },
    ],
    'prettier/prettier': 'error',
    '@typescript-eslint/no-var-requires': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
