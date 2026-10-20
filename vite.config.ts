import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // NOTE: server.watch.ignored (for local dev only) removed here because:
  //  1. Vercel runs `vite build`, never `vite dev` — so it has no effect there.
  //  2. `import.meta.dirname` requires Node ≥21.2 but Vercel uses Node 20 LTS,
  //     which would crash the config parsing on every Vercel build.
  // Add it back locally with VITE_CONFIG_NATIVE_IGNORE_WARNING=true if needed.
})
