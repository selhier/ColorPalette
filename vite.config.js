import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'ColorPalette/', // Reemplaza 'tu-repositorio' con el nombre de tu repositorio
  build: {
    outDir: 'docs', // Configura la carpeta de salida a 'docs'
  },
});
