import { App } from 'vue';
import './style/class.scss';
import IButton from './basic/button/index.ts';
import { IContainer, IAside, IFooter, IHeader, IMain } from './basic/container/index.ts';
import { IRow, ICol } from './basic/layout/index.ts';
import { IInput } from './form/input/index.ts';

export { IButton, IContainer, IAside, IFooter, IHeader, IMain, IRow, ICol, IInput };

export default {
  install(app: App): void {
    app.component(IButton.name, IButton);
    app.component(IContainer.name, IContainer);
    app.component(IAside.name, IAside);
    app.component(IFooter.name, IFooter);
    app.component(IHeader.name, IHeader);
    app.component(IMain.name, IMain);
    app.component(IRow.name, IRow);
    app.component(ICol.name, ICol);
    app.component(IInput.name, IInput);
  },
};
