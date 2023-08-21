import { defineProject } from 'vitest/config'

// @ts-ignore
export default defineProject({
    test: {
        environment: "jsdom",
        globals: true,
        alias: {
            "@": "/src",
        },
    }
})
