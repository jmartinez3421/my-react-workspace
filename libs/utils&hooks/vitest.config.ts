import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

// @ts-ignore
export default mergeConfig(viteConfig, defineConfig({
    test: {
        environment: "jsdom",
        globals: true,
        alias: {
            "@": "/src",
            "$": "/public",
        }
    },
}))
