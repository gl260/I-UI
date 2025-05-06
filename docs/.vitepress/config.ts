import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';
import { defineConfig } from 'vitepress';

const sidebar = {
  '/guide/': [{ text: '指南', link: '/guide/' }],
  '/components/': [
    {
      text: 'Basic 基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/basic/button/' },
        { text: 'Container 布局容器', link: '/components/basic/container/' },
      ],
    },
  ],
};

const nav = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/basic/button/' },
];

export default defineConfig({
  // title: 'I-UI',
  themeConfig: {
    siteTitle: 'I-UI',
    nav,
    sidebar,
  },
  markdown: {
    config: md => {
      md.use(demoblockPlugin);
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },
});
