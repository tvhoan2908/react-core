module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs', 
    'tailwind.config.js', 
    'vite.config.ts', 
    'commitlint.config.js', 
    'node_modules'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
