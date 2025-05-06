import { App } from 'vue';
import IButton from './basic/button/index.ts';

export { IButton };

export default {
  install(app: App): void {
    app.component(IButton.name, IButton);
  },
};
