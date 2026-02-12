import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{js,jsx,ts,tsx}',
    }),
    tsconfigPaths(),
  ],
  server: {
    proxy: {
      '/account': 'http://localhost:5000',
      '/farmers': 'http://localhost:5000',
      '/users': 'http://localhost:5000',
      '/uploads': 'http://localhost:5000',
    },
  },
});
