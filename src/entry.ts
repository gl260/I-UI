import { App } from 'vue';
import './style/class.scss';
import { IButton } from './basic/button/index.ts';
import { IContainer, IAside, IFooter, IHeader, IMain } from './basic/container/index.ts';
import { IRow, ICol } from './basic/layout/index.ts';
import { IInput } from './form/input/index.ts';
import { IRadio, IRadioButton, IRadioGroup } from './form/radio/index.ts';
import { IAlert } from './feedback/alert/index.ts';

export { IButton, IContainer, IAside, IFooter, IHeader, IMain, IRow, ICol, IInput, IRadio, IRadioButton, IRadioGroup, IAlert };

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
    app.component(IRadio.name, IRadio);
    app.component(IRadioButton.name, IRadioButton);
    app.component(IRadioGroup.name, IRadioGroup);
    app.component(IAlert.name, IAlert);
  },
};
