import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 Indique d’utiliser des chemins relatifs
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
