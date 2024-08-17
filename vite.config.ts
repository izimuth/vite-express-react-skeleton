
import { defineConfig } from 'vite'
import path from 'node:path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/client')
    }
  },
  build: {
    manifest: true,
    outDir: path.resolve(__dirname, './build/public'),
    rollupOptions: {
      input: path.resolve(__dirname, './src/client/app.tsx')
    }
  },
  server: {
    origin: 'http://localhost:3000'
  }
})
