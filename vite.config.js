import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    [vue({
      template: {
        compilerOptions: {
          // Tratar 'calendar-date' como un elemento personalizado
          isCustomElement: tag => ['calendar-date', 'calendar-month', 'calendar-multi'].includes(tag)
        }
      }
    })]
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
