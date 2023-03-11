import { fileURLToPath, URL } from "node:url";

import { defineConfig, type ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import VueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { VueBmapGlResolver } from "@vuemap/unplugin-resolver";
import path, { resolve } from "path";
export default defineConfig(({ mode }: ConfigEnv) => {
    return {
        base: mode === "development" ? "/" : "/sf-admin/",
        clearScreen: true,
        plugins: [
            vue(),
            AutoImport({
                imports: [
                    "vue",
                    "pinia",
                    "vue-i18n",
                    "vue-router",
                    "@vueuse/core",
                ],
                dts: "custom/auto-imports.d.ts",
                eslintrc: {
                    enabled: true,
                    filepath: "./.eslintrc-auto-import.json",
                    globalsPropValue: true,
                },
                resolvers: [ElementPlusResolver(), VueBmapGlResolver()],
            }),
            Components({
                dirs: "src/components",
                dts: "custom/component.d.ts",
                resolvers: [ElementPlusResolver(), VueBmapGlResolver()],
                deep: true,
            }),
            VueJsx({}),
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
                symbolId: "icon-[dir]-[name]",
                inject: "body-last",
                customDomId: "__svg__icons__dom__",
            }),
        ],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
                "@components": fileURLToPath(
                    new URL("./src/components", import.meta.url)
                ),
                "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
            },
        },
        envDir: fileURLToPath(new URL("config/env", import.meta.url)),
        css: {
            preprocessorOptions: {
                less: {},
                scss: {
                    additionalData: `@use "./src/styles/themes/index.scss" as *;`,
                },
            },
        },
        server: {
            host: true,
            open: false,
            cors: true,
        },
        envPrefix: ["VITE_", "TAURI_"],
        build: {
            outDir: "my-admin",
            target: "es2015",
            // assetsDir: "./static",
            minify: "terser",
            assetsInlineLimit: 4096,
            sourcemap: false,
            cssCodeSplit: true,
            rollupOptions: {
                input: {
                    index: resolve(__dirname, "index.html"),
                },
                output: {
                    chunkFileNames: "js/[name]-[hash].js",
                    entryFileNames: "js/[name]-[hash].js",
                    assetFileNames: "images/[name]-[hash].[ext]",
                },
            },
            // cssTarget: "chrome61",
            reportCompressedSize: true,
            chunkSizeWarningLimit: 2000,
            terserOptions: {
                compress: {},
                output: {
                    comments: true,
                },
            },
        },
    };
});
