import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // exceeds 500kB; raise limit to avoid build warning (or use code-splitting).
    chunkSizeWarningLimit: 1200,
  },
})
