import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { crx } from '@crxjs/vite-plugin';
import manifest from './src/manifest.json';
import { resolve } from 'path';
import tailwindcss from "@tailwindcss/vite";


const srcDir = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte(),
    crx({
      manifest: manifest as any,
    }),
  ],
  resolve: {
    alias: {
      src: srcDir,
      '@': srcDir,
    },
  },
});
