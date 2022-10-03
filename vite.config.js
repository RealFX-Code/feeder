import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    /* https: {
      key: fs.readFileSync('certs/vite.key.pem'),
      cert: fs.readFileSync('certs/vite.crt.pem'),
    }, */
    cors: true,
  }
})
