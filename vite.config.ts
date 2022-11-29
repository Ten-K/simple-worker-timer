import * as path from 'path'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import libFile from 'vite-plugin-libfile'
import terser from '@rollup/plugin-terser'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    dts({
      include: 'src/*.ts'
    }),
    libFile({
      paths: ['style.css']
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SimpleWorkerTimer',
      fileName: (format) => `index.${format}.js`
    },
    // https://rollupjs.org/guide/en/#big-list-of-options
    rollupOptions: {
      treeshake: true,
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      },
      plugins: [terser()]
    }
  }
})
