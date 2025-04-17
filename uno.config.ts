import { defineConfig, presetWind3, presetAttributify, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetWind3(), 
    presetAttributify(), 
    presetIcons()
  ],
  theme:{
    colors:{
      primary: '#b558f6',
      success: '#29cb97',
      warning: '#ffa629',
      danger: '#f65860',
      info: '#909399',
    }
  },
})