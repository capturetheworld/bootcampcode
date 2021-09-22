/**
 * These rules enforce Hack Reactor's style guide.
 * Visit this repo for more information:
<<<<<<< HEAD
 *   https://github.com/hackreactor-labs/eslint-config-hackreactor
 */

module.exports = {
  parserOptions: {
    ecmaVersion: 5
=======
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  env: {
    'es6': true
  },
  parserOptions: {
    ecmaFeatures: {
      'jsx': true
    }
>>>>>>> dcb86010d2b489618ec2072c669ac2a6e9ca72a5
  },
  rules: {
    /* Indentation */
    'no-mixed-spaces-and-tabs': 2,
<<<<<<< HEAD
    'indent-legacy': [2, 2],
    /* Variable names */
=======
    'indent': [2, 2],
    /* Variable cames */
>>>>>>> dcb86010d2b489618ec2072c669ac2a6e9ca72a5
    'camelcase': 2,
    /* Language constructs */
    'curly': 2,
    'eqeqeq': [2, 'smart'],
    'func-style': [2, 'expression'],
    /* Semicolons */
    'semi': 2,
    'no-extra-semi': 2,
<<<<<<< HEAD
    /* Padding & additional whitespace (preferred but optional) */
=======
    /* Padding & additional whitespace (perferred but optional) */
>>>>>>> dcb86010d2b489618ec2072c669ac2a6e9ca72a5
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'semi-spacing': 1,
    'key-spacing': 1,
    'block-spacing': 1,
    'comma-spacing': 1,
    'no-multi-spaces': 1,
    'space-before-blocks': 1,
    'keyword-spacing': [1, { 'before': true, 'after': true }],
    'space-infix-ops': 1,
    /* Variable declaration */
    'one-var': [1, { 'uninitialized': 'always', 'initialized': 'never' }],
    /* Minuta */
    'comma-style': [2, 'last'],
    'quotes': [1, 'single']
  }
};
