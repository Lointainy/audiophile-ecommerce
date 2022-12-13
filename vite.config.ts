import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/assets/styles') },
      { find: '@img', replacement: path.resolve(__dirname, 'src/assets/img') },
      { find: '@layout', replacement: path.resolve(__dirname, 'src/layout') },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "sass:math";
        `,
      },
    },
  },
})
