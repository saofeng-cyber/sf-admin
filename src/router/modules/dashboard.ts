export default {
    path: "/dashboard",
    name: "仪表盘",
    redirect: "/dashboard/analysis",
    component: "basic",
    meta: {
        title: "仪表盘",
        icon: "ep:document-copy",
    },
    children: [
        {
            path: "analysis",
            name: "analysis",
            component: "self",
            meta: {
                title: "分析页",
                icon: "icon-park-outline:analysis",
            },
        },
        {
            path: "workbench",
            name: "workbench",
            component: "self",
            meta: {
                title: "工作台",
                icon: "icon-park-outline:workbench",
            },
        },
    ],
} as AuthRoute.Route;
