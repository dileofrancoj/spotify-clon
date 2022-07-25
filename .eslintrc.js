module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // extends: ['eslint:recommended', 'plugin:react/recommended'],
  extends: ['plugin:@next/next/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    /* If want to activate this rules, you should disabled extends: ['plugin:@next/next/recommended'] (currently line 8) and enable 
        extends: ['eslint:recommended', 'plugin:react/recommended'] (currently line 7)
    */
    //'react/prop-types': 0,
    // 'react/react-in-jsx-scope': 'off',
  },
};
