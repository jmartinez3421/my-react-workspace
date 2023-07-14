import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from "path";

function pathResolve(dir: string) {
    return resolve(__dirname, ".", dir);
}

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    resolve: {
        alias: [
            {
                find: /@\//,
                replacement: pathResolve("src") + "/",
            },
        ],
    },
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            name: '@jmartinez3421/utils-and-hooks',
            formats: ['es', 'umd'],
            fileName: (format) => `utils-and-hooks.${ format }.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
