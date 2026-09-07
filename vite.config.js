import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/funngro-website/',   // GitHub Pages repo sub-path
})
