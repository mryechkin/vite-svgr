import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      icon: true,
      replaceAttrValues: { '#1D1D1D': 'currentColor' },
      titleProp: true,
    }),
  ],
});
