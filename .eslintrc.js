module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'eslint-plugin-import',
    'promise',
    // "react-perf"
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // "plugin:react-perf/recommended"
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'comma-spacing': ['warn', { before: false, after: true }],
    'object-curly-newline': ['warn', { multiline: true }],
    'comma-dangle': ['warn', 'never'],
    indent: ['warn', 2, { SwitchCase: 1 }],
    'object-curly-spacing': ['warn', 'always'],
    semi: ['off', 'always'],
    'no-console': 'warn',
    quotes: ['warn', 'double'],
    'no-bitwise': 1,
    'new-parens': 1,
    'lines-around-comment': 'warn',
    'multiline-comment-style': 'warn',
    'valid-typeof': 'warn',
    'no-trailing-spaces': 'warn',
    'prefer-const': [1, { destructuring: 'any' }],
    'space-before-function-paren': [0, 'never'],
    'jsx-quotes': 'warn',
    'react/no-access-state-in-setstate': 1,
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx', 'js', 'ts'] }],
    'array-bracket-spacing': 1,
    'require-await': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    camelcase: 'warn',
    'switch-colon-spacing': 'warn',
    'no-duplicate-case': 'warn',
    '@typescript-eslint/no-explicit-any': 0,
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-non-null-assertion': 'off',
  },
};
