import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/fcc-fedl-01-random-quote-machine/',
	plugins: [react()],
});
