module.exports = {
  root: true,
  extends: 'react-app',
  plugins: ['import', 'simple-import-sort'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // only fixable rules
    curly: [2, 'all'],
    semi: [2, 'never'],
    quotes: [2, 'single', { avoidEscape: true }],
    'sort-imports': 0,
    'import/order': 0,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'import/no-extraneous-dependencies': 2,
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
}
