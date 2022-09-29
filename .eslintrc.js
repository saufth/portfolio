const ruleStates = {
  off: 'off',
  warn: 'warn',
  error: 'error',
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'space-before-function-paren': ruleStates.off,
    'react/react-in-jsx-scope': ruleStates.off,
    'react/prop-types': ruleStates.off,
    'jsx-quotes': [
      ruleStates.error,
      'prefer-single'
    ],
    'react-hooks/rules-of-hooks': ruleStates.error,
    'react-hooks/exhaustive-deps': ruleStates.warn
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
