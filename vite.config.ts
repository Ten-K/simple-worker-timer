import * as path from 'path'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import libFile from 'vite-plugin-libfile'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { terser } from 'rollup-plugin-terser'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    dts(),
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
          vue: 'vue'
        },
        exports: 'named'
      },
      plugins: [terser({ compress: { drop_console: true } })]
    }
  }
})
