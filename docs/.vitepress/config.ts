import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import { defineConfig } from 'vitepress'
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
      ]
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' },
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