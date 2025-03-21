import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Correct base for a custom domain
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
