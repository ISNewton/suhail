import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: [ 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(), // React plugin that we installed for vite.js
    ],
    alias: {
        '@': '/resources/js',
    },
});
