/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
    test: {
    globals: true,          // para poder usar describe, it, expect sin importar
    environment: "jsdom",   // simula un navegador
    setupFiles: "./src/setupTests.ts", // nuestro archivo de setup
  },
})
