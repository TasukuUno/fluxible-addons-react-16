const path = require('path');

module.exports = {
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: path.resolve(__dirname, './tsconfig.json'),
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'semi': 2,
    'no-with': 2,
    'indent': [2, 2, {
      'SwitchCase': 1,
      'MemberExpression': 1,
    }],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'camelcase': 2,
    'curly': 2,
    'no-multi-str': 2,
    'one-var': [2, {
      'uninitialized': 'always',
      'initialized': 'never'
    }],
    'brace-style': 2,
    'keyword-spacing': 2,
    'operator-linebreak': [2, 'after'],
    'space-unary-ops': 2,
    'space-infix-ops': 2,
    'space-before-blocks': 2,
    'semi-spacing': 2,
    'space-before-function-paren': [2, 'never'],
    'func-call-spacing': 2,
    'space-in-parens': 2,
    'array-bracket-spacing': [2, 'always'],
    'object-curly-spacing': [2, 'always'],
    'key-spacing': 2,
    'quotes': [2, 'single'],
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-multi-spaces': 2,
    'eqeqeq': [2, 'always', { 'null': 'ignore' }],
    'no-var': 2,
    'no-unused-vars': [2, { 'ignoreRestSiblings': true }],
    'prefer-const': 2,
    'arrow-parens': [2, 'as-needed'],
    'no-lonely-if': 2,
    'comma-dangle': [2, 'always-multiline'],
    'no-debugger': 1,
    'no-console': 1,
    'semi-style': [2, 'last'],
    'max-len': [2, {
      'code': 120,
      'tabWidth': 2,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
    }],
    'lines-between-class-members': [2, 'always', { 'exceptAfterSingleLine': true }],
    'no-trailing-spaces': 2,
    'react/no-find-dom-node': 0,
    'react/no-typos': 2,
    'react/void-dom-elements-no-children': 2,
    'react/require-default-props': 2,
    'react/jsx-tag-spacing': [2, {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never'
    }],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/no-access-state-in-setstate': 2,
    'react/no-this-in-sfc': 2,
    'react/jsx-no-bind': 2,
    'react/no-deprecated': 2,
    'react/sort-prop-types': [2, {
      'callbacksLast': true,
      'requiredFirst': true,
      'sortShapeProp': true
    }],
    'react/jsx-one-expression-per-line': [2, { 'allow': 'single-child' }],
    'func-call-spacing': 0,
    '@typescript-eslint/func-call-spacing': 2,
    '@typescript-eslint/type-annotation-spacing': 2,
    '@typescript-eslint/prefer-regexp-exec': 2,
    '@typescript-eslint/prefer-includes': 2,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/require-array-sort-compare': 2,
    '@typescript-eslint/restrict-plus-operands': 2,
    '@typescript-eslint/unbound-method': 2,
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/indent': [2, 2, {
      'SwitchCase': 1,
      'MemberExpression': 1,
    }],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': [2, { "functions": false }],
    '@typescript-eslint/prefer-namespace-keyword': 0,
    'no-unused-vars': 0,
    'one-var': 0,
    'no-undef': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
  },
}