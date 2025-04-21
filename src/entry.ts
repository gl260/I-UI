import { App } from 'vue'
import IButton from './button/index.tsx'

export { IButton }

export default {
  install(app: App):void {
    app.component(IButton.name, IButton)
  }
}