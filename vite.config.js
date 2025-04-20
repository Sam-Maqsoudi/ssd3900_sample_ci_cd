import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/your-repo-name/', // You'll need to change this to your actual repo name
  
  css: {
    devSourcemap: true,
  },
  
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
})
