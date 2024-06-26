import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/group-exports': 'error',
    'import/no-duplicates': 'error',
    'import/no-amd': 'error',
    'import/no-commonjs': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/no-unused-modules': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['vite.config.ts', 'test/**/*.test.ts'] },
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/no-empty-component-block': 'error',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
});

// {
//   "env": {
//     "es2020": true,
//     "browser": true,
//     "vue/setup-compiler-macros": true
//   },
//   "extends": [
//     "eslint:recommended",
//     "plugin:import/recommended",
//     "plugin:import/typescript",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:vue/vue3-recommended"
//   ],
//   "parserOptions": {
//     "parser": "@typescript-eslint/parser",
//     "ecmaVersion": 2020,
//     "sourceType": "module"
//   },
//   "plugins": ["import", "vue"],

//   "settings": {
//     "import/resolver": {
//       "typescript": {}
//     }
//   },
//   "overrides": [
//     {
//       "files": ["src/**/*.vue"],
//       "rules": {
//         "import/prefer-default-export": "off"
//       }
//     },
//     {
//       "files": ["pages/**/*.vue", "components/__common/icon/*.vue"],
//       "rules": {
//         "vue/multi-word-component-names": "off"
//       }
//     }
//   ]
// }
