import DefaultTheme from 'vitepress/theme';
import 'uno.css';
import IUI from '../../../src/entry';

import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import { useComponents } from './useComponents';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.use(IUI);
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);
  },
};
