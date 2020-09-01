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
    'space-before-function-paren': 0,
    semi: 0,
    'no-trailing-spaces': 0,
    indent: 0,
    'key-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/mustache-interpolation-spacing': 0,
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/attribute-hyphenation': 0,
    'vue/require-default-prop': 0,
    'vue/order-in-components': 0,
    'vue/html-indent': 0,
    'vue/multiline-html-element-content-newline': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'no-multi-spaces': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-tabs': 0,
    quotes: 0,
    'quote-props': 0
  }
}
