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
      // collapsed: true,
      items: [
        { text: 'Button 按钮', link: '/components/basic/button/' },
        { text: 'Container 布局容器', link: '/components/basic/container/' },
        { text: 'Layout 布局', link: '/components/basic/layout/' },
      ],
    },
    {
      text: 'Form 表单组件',
      items: [
        { text: 'Input 输入框', link: '/components/form/input/' },
        { text: 'Radio 单选框', link: '/components/form/radio/' },
        { text: 'Switch 开关', link: '/components/form/switch/' },
        { text: 'Rate 评分', link: '/components/form/rate/' },
        { text: 'Form 表单', link: '/components/form/form/' },
      ],
    },
    {
      text: 'Data 数据组件',
      items: [
        { text: 'Table 表格', link: '/components/data/table/' },
        { text: 'Pagination 分页', link: '/components/data/pagination/' },
        { text: 'Empty 空状态', link: '/components/data/empty/' },
        { text: 'Card 卡片', link: '/components/data/card/' },
        { text: 'Carousel 走马灯', link: '/components/data/carousel/' },
        { text: 'Collapse 折叠面板', link: '/components/data/collapse/' },
        { text: 'Skeleton 骨架屏', link: '/components/data/skeleton/' },
        { text: 'Progress 进度条', link: '/components/data/progress/' },
        { text: 'Result 结果', link: '/components/data/result/' },
      ],
    },
    {
      text: 'Navigation 导航组件',
      items: [
        { text: 'Backtop 回到顶部', link: '/components/navigation/backtop/' },
        { text: 'Breadcrumb 面包屑', link: '/components/navigation/breadcrumb/' },
        { text: 'Menu 菜单', link: '/components/navigation/menu/' },
        { text: 'Steps 步骤条', link: '/components/navigation/steps/' },
        { text: 'Tabs 标签页', link: '/components/navigation/tabs/' },
      ],
    },
    {
      text: 'Feedback 反馈组件',
      items: [
        { text: 'Alert 警告', link: '/components/feedback/alert/' },
        { text: 'Dialog 对话框', link: '/components/feedback/dialog/' },
        { text: 'Drawer 抽屉', link: '/components/feedback/drawer/' },
        { text: 'Message 消息提示', link: '/components/feedback/message/' },
        { text: 'Notification 通知', link: '/components/feedback/notification/' },
      ],
    },
  ],
};

const nav = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/basic/button/', activeMatch: '/components/' },
];

export default defineConfig({
  title: 'I-UI',
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
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
  markdown: {
    config: md => {
      md.use(demoblockPlugin);
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
    publicDir: 'public',
  },
});
