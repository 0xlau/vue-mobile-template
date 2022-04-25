import { fileURLToPath, URL } from 'url'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/plugins/svgBuilder'; 

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-mobile-template/',
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
    svgBuilder('./src/assets/icons/svg/')
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
