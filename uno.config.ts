import { defineConfig, presetWind3, presetAttributify, presetIcons } from "unocss";

const ButtonColors = ['primary', 'success', 'warning', 'danger', 'info'];
const safelist = [
  ...ButtonColors.map((v) => `bg-${v}`),
  ...ButtonColors.map((v) => `hover:bg-${v}/80`),
];

export default defineConfig({
  presets: [
    presetWind3(), 
    presetAttributify(), 
    presetIcons()
  ],
  safelist,
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