import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: 'src',

  define: {
    global: 'globalThis',
  },

  base: '/goit-js-hw-09/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        gallery: resolve(__dirname, 'src/01-gallery.html'),
        form: resolve(__dirname, 'src/02-form.html'),
      },
    },
  },
});