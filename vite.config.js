import { fileURLToPath, URL } from 'url'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), styleImport({
    resolves: [VantResolve()],
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
