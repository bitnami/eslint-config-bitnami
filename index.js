'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/es6',
    './rules/style',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script'
  },
  env: {
    mocha: true,
    es6: true,
    node: true,
    browser: false
  },
  rules: {
    strict: 2
  }
};
