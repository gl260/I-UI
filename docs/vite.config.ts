import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    Unocss({
      configFile: '../uno.config.ts',
    }),
  ],
  resolve: {
    alias: {
      'mini-i-ui': path.resolve(import.meta.dirname, '../src/entry.ts'),
    },
  },
});
