import { defineConfig, presetWind3, presetAttributify, presetIcons, Rule } from 'unocss';

const themeColors = ['primary', 'success', 'warning', 'danger', 'info'];
const icons = ['search', 'edit', 'checkmark', 'star', 'mail'];
const gridClasses = Array(24)
  .fill(0)
  .map((_, i) => `i-col-${i + 1}`);
const lineMd = [
  'i-line-md-bell-loop',
  'i-line-md-emoji-smile',
  'i-line-md-emoji-frown',
  'i-line-md-emoji-neutral',
  'i-line-md-watch',
  'i-line-md-watch-off',
];
const safelist = [
  ...themeColors.map(v => `bg-${v}`),
  'bg-#fff',
  'bg-#fff/30',
  'bg-#fff/70',
  ...themeColors.map(v => `bg-${v}/30`),
  ...themeColors.map(v => `bg-${v}/20`),
  ...themeColors.map(v => `hover:bg-${v}/80`),
  ...themeColors.map(v => `hover:bg-${v}`),
  ...themeColors.map(v => `border-${v}`),
  ...themeColors.map(v => `text-${v}`),
  ...themeColors.map(v => `hover:border-${v}`),
  ...themeColors.map(v => `focus-within:border-${v}`),
  ...icons.map(v => `i-fluent-${v}-20-regular`), // 注意添加i-前缀
  ...gridClasses,
  ...lineMd,
];

// 生成栅格规则
const gridRules: Rule[] = Array(24)
  .fill(0)
  .map((_, i) => {
    const span = i + 1;
    const width = (span * 100) / 24;
    return [
      `i-col-${span}`,
      {
        flex: `0 0 ${width}%`,
        'max-width': `${width}%`,
      },
    ];
  });

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
  rules: gridRules,
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
          --i-color-primary-7:rgba(181,88,246,0.7);
        }
      `,
    },
  ],
});
