import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins:[
    vue(),
    vuejsx({})
  ]
})