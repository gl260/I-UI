import DefaultTheme from 'vitepress/theme';
import 'uno.css';
import IUI from '../../../src/entry';
import './rainbow.css';
import './common-style.scss';
import './theme-config.scss';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import { useComponents } from './useComponents';
import { watch } from 'vue';
let homePageStyle: any | undefined;

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.use(IUI);
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);

    watch(
      () => ctx.router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/'),
      { immediate: true },
    );
  },
};

if (typeof window !== 'undefined') {
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes('chrome')) document.documentElement.classList.add('browser-chrome');
  else if (browser.includes('firefox')) document.documentElement.classList.add('browser-firefox');
  else if (browser.includes('safari')) document.documentElement.classList.add('browser-safari');
}

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;

    homePageStyle = document.createElement('style');
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 20s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    // 不在首页时，移除动画
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
