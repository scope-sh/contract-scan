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
      'vue/html-self-closing': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multi-word-component-names': 'error',
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
      'vue/block-tag-newline': 'error',
      'vue/component-name-in-template-casing': 'error',
      'vue/define-emits-declaration': ['error', 'type-literal'],
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
          defineExposeLast: false,
        },
      ],
      'vue/define-props-declaration': 'error',
      'vue/enforce-style-attribute': 'error',
      'vue/no-empty-component-block': 'error',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-required-prop-with-default': 'error',
      'vue/no-template-target-blank': 'error',
      'vue/no-undef-components': 'error',
      'vue/no-undef-properties': 'error',
      'vue/no-unused-emit-declarations': 'error',
      'vue/no-unused-properties': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/prefer-separate-static-class': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/require-typed-ref': 'error',
      'vue/v-on-handler-style': 'error',
    },
  },
  {
    files: ['app/pages/**/*.vue', 'app/components/__common/icon/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
);
