module.exports = {
  rules: {
    quotes: [
      2, 'single', {avoidEscape: true, allowTemplateLiterals: true} // http://eslint.org/docs/rules/quotes
    ],
    'func-names': 0,
    'no-unneeded-ternary': 0, // Sometimes, forbidding 'unneeded' ternary makes the code less readable
    'object-curly-spacing': [2, 'never'],
    'space-before-function-paren': [2, 'never'],
    'newline-per-chained-call': 0,
    'no-underscore-dangle': 0,
    'quote-props': 0,
    'max-len': [2, {code: 120}]
  }
};
