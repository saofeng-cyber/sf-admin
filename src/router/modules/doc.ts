export default {
    path: "/doc",
    name: "文档",
    // redirect: "/doc/vuedoc",
    component: "basic",
    meta: {
        title: "文档",
        icon: "ep:document-copy",
    },
    children: [
        {
            path: "vuedoc",
            name: "vue-doc",
            component: "self",
            meta: {
                title: "Vue文档",
                icon: "vscode-icons:file-type-vue",
            },
        },
        {
            path: "vitedoc",
            name: "vite-doc",
            component: "self",
            meta: {
                title: "Vite文档",
                icon: "vscode-icons:file-type-vite",
            },
        },
        {
            path: "element-plus",
            name: "element-plus",
            component: "self",
            meta: {
                title: "ElementPlus文档",
                icon: "logos:element",
            },
        },
    ],
} as AuthRoute.Route;
