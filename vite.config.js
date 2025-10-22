import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    port: 5000,
    hmr: true,
    strictPort: true
  },
  publicDir: 'public'
})
