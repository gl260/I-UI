import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import { defineConfig } from 'vitepress'
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: 'Basic 基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
      ]
    },
    { text: 'Form 表单组件' },
    { text: 'Data 数据展示' },
    { text: 'Navigation 导航' },
    { text: 'Feedback 反馈组件' },
   ],
  }
const nav = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/button' }
]



export default defineConfig({
  title: 'I-UI',
  themeConfig: {
    nav,
    sidebar
  },
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  }
})