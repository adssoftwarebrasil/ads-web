import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(import.meta.dirname, 'src/worker.js'),
      formats: ['es'],
      fileName: () => 'server/index.js',
    },
    minify: false,
  },
})
