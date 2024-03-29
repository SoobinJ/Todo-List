module.exports = {
  env: {
    browser: true,
    commonjs: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 0,
    // 중첩삼항연산자
    'no-nested-ternary': 'off',
    // 배열 구조분해 할당
    'prefer-destructuring': 0,
    'arrow-body-style': 'off',
    'prettier/prettier': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
};
