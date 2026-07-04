import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],

  server: {
    host: "0.0.0.0", // Allows access from outside the container
    port: 5173,

    watch: {
      usePolling: true,
    },
  },
})