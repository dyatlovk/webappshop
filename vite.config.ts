import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), svgr()],
  resolve: {
    alias: {
      '@': new URL('app', import.meta.url).pathname,
      '@assets': new URL('app/assets', import.meta.url).pathname,
    },
  },
})
