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
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './src/core',
            from: './src/components'
          },
          {
            target: './src/core',
            from: './src/lib'
          },
          {
            target: './src/core',
            from: './src/pages'
          },
          {
            target: './src/lib',
            from: './src/pages'
          },
          {
            target: './src/components',
            from: './src/pages'
          }
        ]
      }
    ]
  }
}
