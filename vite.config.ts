import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES
    ? 'https://tufusa.github.io/masudashi-nazotoki/'
    : '/masudashi-nazotoki/',
  server: {
    open: '/masudashi-nazotoki/',
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      pages: path.resolve(__dirname, 'src/pages'),
      components: path.resolve(__dirname, 'src/components'),
      routes: path.resolve(__dirname, 'src/routes'),
      css: path.resolve(__dirname, 'src/css'),
    },
  },
});
