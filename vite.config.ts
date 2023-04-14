import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    open: '/'
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        play: resolve(__dirname, 'play/index.html'),
        clear: resolve(__dirname, 'clear/index.html'),
        credits: resolve(__dirname, 'credits/index.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        // assetFileNames: 'assets/[name].[ext]'
        assetFileNames: (assetInfo) => {
          let basename = assetInfo.name.split('.')[0]
          let name = assetInfo.name.split('.')[1] == "css" ? "index" : basename
          return `assets/${name}.[ext]`
        }
      },
    },
  },
})
