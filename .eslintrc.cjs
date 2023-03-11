/* eslint-env node */
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    // 解析器
    parser: "vue-eslint-parser",
    extends: [
        "plugin:vue/vue3-strongly-recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier",
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        jsxPragma: "React",
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
    },
    // 插件
    // plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "no-undef": 0,
        "vue/multi-word-component-names": 0,
        "vue/html-indent": 0,
    },
};
