import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES
    ? "https://tufusa.github.io/masudashi-nazotoki/"
    : "/masudashi-nazotoki/",
  server: {
    open: '/masudashi-nazotoki/'
  },
})
