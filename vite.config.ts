import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        TanStackRouterVite(),
    ],
    css    : {
        modules: {
            generateScopedName: '[name]_[local]_[hash:base64:5]',
        },
    },
    resolve: {
        alias: {
            '@': '/src',
            '$': '/',
        },
    },
    test   : {
        environment: 'jsdom',
        globals    : true,
        setupFiles : './_tests_/setup.ts',
        css        : {
            modules: {
                classNameStrategy: 'stable',
            },
        },
    },
});
