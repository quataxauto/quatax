import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'; // 👈 Import the plugin
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),],
  build: {
    outDir: 'dist', // <-- This forces Vite to output to a 'dist' folder
    assetsDir: 'assets',
    target: 'esnext', // Ensures that modern JavaScript features are supported
  },
  base: '/', // 👈 THIS LINE IS THE KEY
})
