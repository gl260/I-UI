import { App } from 'vue';
import IButton from './basic/button/index.ts';
import { IContainer, IAside, IFooter, IHeader, IMain } from './basic/container/index.ts';

export { IButton, IContainer, IAside, IFooter, IHeader, IMain };

export default {
  install(app: App): void {
    app.component(IButton.name, IButton);
    app.component(IContainer.name, IContainer);
    app.component(IAside.name, IAside);
    app.component(IFooter.name, IFooter);
    app.component(IHeader.name, IHeader);
    app.component(IMain.name, IMain);
  },
};
