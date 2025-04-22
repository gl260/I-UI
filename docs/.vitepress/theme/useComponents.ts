// 引入组件
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import type { App } from 'vue'

export function useComponents(app: App) {
  // 注册组件
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}