import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    build: {
        target: 'esnext', // Make sure it's targeting modern browsers
    },
    server: {
        proxy: {
            '/app': 'http://127.0.0.1:8000', // Laravel backend proxy
        },
    },
});
