import { defineConfig, presetWind3, presetAttributify, presetIcons } from 'unocss';

const ButtonColors = ['primary', 'success', 'warning', 'danger', 'info'];
const icons = ['search', 'edit', 'checkmark', 'star', 'mail'];
const safelist = [
  ...ButtonColors.map(v => `bg-${v}`),
  'bg-#fff',
  'bg-#fff/30',
  'bg-#fff/70',
  ...ButtonColors.map(v => `bg-${v}/30`),
  ...ButtonColors.map(v => `hover:bg-${v}/80`),
  ...ButtonColors.map(v => `hover:bg-${v}`),
  ...ButtonColors.map(v => `border-${v}`),
  ...ButtonColors.map(v => `text-${v}`),
  ...icons.map(v => `i-fluent-${v}-20-regular`), // 注意添加i-前缀
];

export default defineConfig({
  presets: [presetWind3(), presetAttributify(), presetIcons()],
  safelist,
  theme: {
    colors: {
      primary: '#b558f6',
      success: '#29cb97',
      warning: '#ffa629',
      danger: '#f65860',
      info: '#909399',
    },
  },
  preflights: [
    {
      getCSS: () => `
        :root {
          --i-color-primary: #b558f6;
          --i-color-primary-1:rgba(181,88,246,0.1);
          --i-color-primary-2:rgba(181,88,246,0.2);
          --i-color-primary-3:rgba(181,88,246,0.3);
          --i-color-primary-4:rgba(181,88,246,0.4);
          --i-color-primary-5:rgba(181,88,246,0.5);
          --i-color-primary-6:rgba(181,88,246,0.6);
          --i-color-primary-7: rgba(181,88,246,0.7);
        }
      `,
    },
  ],
});
