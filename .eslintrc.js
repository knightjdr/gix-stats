module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    semi: [2, 'always'],
  },
};
