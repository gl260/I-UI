import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';
import { defineConfig } from 'vitepress';

const lastUpdated = {
  text: '最后更新于',
  formatOptions: {
    year: 'numeric' as any,
    month: 'numeric' as any,
    day: 'numeric' as any,
    hour: '2-digit' as any,
    minute: '2-digit' as any,
    second: '2-digit' as any,
    hour12: false,
  },
};

const sidebar = {
  '/guide/': [{ text: '指南', link: '/guide/' }],
  '/components/': [
    {
      text: 'Basic 基础组件',
      collapsed: true,
      items: [
        { text: 'Button 按钮', link: '/components/basic/button/' },
        { text: 'Container 布局容器', link: '/components/basic/container/' },
        { text: 'Layout 布局', link: '/components/basic/layout/' },
      ],
    },
  ],
};

const nav = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/basic/button/', activeMatch: '/components/' },
];

export default defineConfig({
  // title: 'I-UI',
  themeConfig: {
    siteTitle: 'I-UI',
    lastUpdated,
    nav,
    sidebar,
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/gl260/I-UI' }],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright (c) 2025 - present <a href="https://github.com/yyx990803">lgl</a>',
    },
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
