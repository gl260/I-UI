import { App } from 'vue'
import IButton from './button/index.tsx'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton.jsx'

export { IButton, SFCButton, JSXButton }

export default {
  install(app: App):void {
    app.component(IButton.name, IButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  }
}