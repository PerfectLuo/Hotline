module.exports = {
  root: true,
  env: {
    browser: true,
    node: false,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 0,
    'space-before-function-paren':0,
    'semi': 0,
    'no-trailing-spaces':0,
    'indent': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
  }
}
