module.exports = {
  extends: [
    'delaweb'
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    project: './tsconfig.paths.json',
  },
  rules: {
    "react/prop-types": 0,
    "no-plusplus": 0,
    'no-param-reassign': [2, {
      props: false,
    }],
    'import/order': 'off'
  }
};
