import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Exclude large image-frame folders from file watching — prevents
      // EBUSY crashes on Windows when Vite tries to watch binary JPG sets.
      ignored: [
        `${import.meta.dirname}/public/frames`,
        `${import.meta.dirname}/public/frames2`,
      ],
    },
  },
})


