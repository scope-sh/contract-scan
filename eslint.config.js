import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
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
      'vue/multi-word-component-names': 'error',
    },
  },
  {
    files: ['app/pages/**/*.vue', 'app/components/__common/icon/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
);
