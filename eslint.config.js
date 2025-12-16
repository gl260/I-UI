import js from '@eslint/js';
import vuePlugin from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vueParser from 'vue-eslint-parser';
// import prettierConfig from '@vue/eslint-config-prettier';

// 环境变量
const isProd = process.env.NODE_ENV === 'production';

export default [
  // 全局忽略规则（替代.eslintignore）
  {
    ignores: [
      '*.sh',
      'node_modules/**',
      'lib/**',
      'coverage/**',
      '*.md',
      '*.scss',
      '*.woff',
      '*.ttf',
      'docs/.vitepress/cache/**',
      'dist/**',
      'demo/**',
      '.vscode/**',
      '*.json',
      '.husky/**',
    ],
  },

  // js推荐配置
  js.configs.recommended,

  // 基本配置
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ga: 'readonly',
        chrome: 'readonly',
        __DEV__: 'readonly',
        process: 'readonly', // 添加 process 全局变量
        console: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        window: 'readonly',
        HTMLElement: 'readonly',
        browser: true,
        es2020: true,
        node: true,
        jest: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'no-console': isProd ? 'warn' : 'off',
      'no-debugger': isProd ? 'warn' : 'off',
      'prettier/prettier': 'error',
      'no-unused-vars': 'off',
    },
  },

  // Vue文件配置
  {
    files: ['**/*.vue'],
    plugins: {
      vue: vuePlugin,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest', // 使用最新的ECMAScript版本
        sourceType: 'module',
      },
    },
  },

  // TypeScript文件配置
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
  },

  // Prettier配置
  {
    files: ['**/*.{js,jsx,ts,tsx,vue,json}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
