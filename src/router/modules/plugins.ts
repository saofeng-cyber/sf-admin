export default {
    path: "/plugins",
    redirect: "/plugins/markdown",
    name: "插件事例",
    component: "basic",
    meta: {
        title: "插件事例",
        icon: "mingcute:plugin-2-line",
    },
    children: [
        {
            path: "markdown",
            name: "mark-down",
            component: "self",
            meta: {
                title: "MarkDown编辑器",
                icon: "ri:markdown-line",
            },
        },
        {
            path: "editor",
            name: "editor",
            component: "self",
            meta: {
                title: "富文本编辑器",
                icon: "ep:edit-pen",
            },
        },
        {
            path: "print",
            name: "print",
            component: "self",
            meta: {
                title: "打印",
                icon: "mingcute:print-line",
            },
        },
        {
            path: "map",
            name: "vue-map",
            component: "self",
            meta: {
                title: "地图",
                icon: "material-symbols:map-outline",
            },
        },
        {
            path: "video",
            name: "video-play",
            component: "self",
            meta: {
                title: "视频",
                icon: "mdi:video",
            },
        },
        {
            path: "logicflow",
            name: "logicflow",
            component: "self",
            meta: {
                title: "流程图",
                icon: "ri:flow-chart",
            },
        },
    ],
} as AuthRoute.Route;
