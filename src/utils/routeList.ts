export const superList = [
    {
        name: "dashboard",
        path: "/dashboard",
        component: "basic",
        meta: {
            title: "仪表盘",
            icon: "mdi:monitor-dashboard",
        },
        children: [
            {
                name: "analysis",
                path: "/dashboard/analysis",
                component: "self",
                meta: {
                    title: "分析页",
                    icon: "icon-park-outline:analysis",
                },
            },
            {
                name: "workbench",
                path: "/dashboard/workbench",
                component: "self",
                meta: {
                    title: "工作台",
                    icon: "icon-park-outline:workbench",
                },
            },
        ],
    },
    {
        name: "doc",
        path: "/doc",
        component: "basic",
        meta: {
            title: "文档",
            icon: "ep:document-copy",
        },
        children: [
            {
                name: "vuedoc",
                path: "/doc/vuedoc",
                component: "self",
                meta: {
                    title: "vue文档",
                    icon: "logos:vue",
                },
            },
            {
                name: "vitedoc",
                path: "/doc/vitedoc",
                component: "self",
                meta: {
                    title: "vite文档",
                    icon: "logos:vitejs",
                },
            },
            {
                path: "elementplus",
                name: "/doc/element-plus",
                component: "self",
                meta: {
                    title: "ElementPlus文档",
                    icon: "logos:element",
                },
            },
        ],
    },
    {
        name: "plugins",
        path: "/plugins",
        component: "basic",
        meta: {
            title: "插件事例",
            icon: "mingcute:plugin-2-line",
        },
        children: [
            {
                path: "/plugins/markdown",
                name: "mark-down",
                component: "self",
                meta: {
                    title: "MarkDown编辑器",
                    icon: "ri:markdown-line",
                },
            },
            {
                path: "/plugins/editor",
                name: "editor",
                component: "self",
                meta: {
                    title: "富文本编辑器",
                    icon: "ep:edit-pen",
                },
            },
            {
                path: "/plugins/print",
                name: "print",
                component: "self",
                meta: {
                    title: "打印",
                    icon: "mingcute:print-line",
                },
            },
            {
                path: "/plugins/map",
                name: "vue-map",
                component: "self",
                meta: {
                    title: "地图",
                    icon: "material-symbols:map-outline",
                },
            },
            {
                path: "/plugins/video",
                name: "video-play",
                component: "self",
                meta: {
                    title: "视频",
                    icon: "mdi:video",
                },
            },
        ],
    },
    {
        name: "auth-demo",
        path: "/auth-demo",
        component: "basic",
        children: [
            {
                name: "auth-demo_permission",
                path: "/auth-demo/permission",
                component: "self",
                meta: {
                    title: "权限切换",

                    icon: "ic:round-construction",
                },
            },
            {
                name: "auth-demo_super",
                path: "/auth-demo/super",
                component: "self",
                meta: {
                    title: "超级管理员可见",

                    icon: "ic:round-supervisor-account",
                },
            },
        ],
        meta: {
            title: "权限示例",
            icon: "ic:baseline-security",
        },
    },
    {
        name: "function",
        path: "/function",
        component: "basic",
        children: [
            {
                name: "function_tab",
                path: "/function/tab",
                component: "self",
                meta: {
                    title: "Tab",

                    icon: "ic:round-tab",
                },
            },
            {
                name: "function_tab-detail",
                path: "/function/tab-detail",
                component: "self",
                meta: {
                    title: "Tab Detail",
                    icon: "ic:round-tab",
                },
            },
            {
                name: "function_tab-multi-detail",
                path: "/function/tab-multi-detail",
                component: "self",
                meta: {
                    title: "Tab Multi Detail",
                    icon: "ic:round-tab",
                },
            },
        ],
        meta: {
            title: "功能",
            icon: "icon-park-outline:all-application",
        },
    },
    {
        name: "exception",
        path: "/exception",
        component: "basic",
        children: [
            {
                name: "exception_403",
                path: "/exception/403",
                component: "self",
                meta: {
                    title: "异常页403",
                    icon: "ic:baseline-block",
                },
            },
            {
                name: "exception_404",
                path: "/exception/404",
                component: "self",
                meta: {
                    title: "异常页404",
                    icon: "ic:baseline-web-asset-off",
                },
            },
            {
                name: "exception_500",
                path: "/exception/500",
                component: "self",
                meta: {
                    title: "异常页500",
                    icon: "ic:baseline-wifi-off",
                },
            },
        ],
        meta: {
            title: "异常页",
            icon: "ant-design:exception-outlined",
        },
    },
    {
        name: "multi-menu",
        path: "/multi-menu",
        component: "basic",
        children: [
            {
                name: "multi-menu_first",
                path: "/multi-menu/first",
                component: "multi",
                children: [
                    {
                        name: "multi-menu_first_second",
                        path: "/multi-menu/first/second",
                        component: "self",
                        meta: {
                            title: "二级菜单",
                            icon: "mdi:menu",
                        },
                    },
                    {
                        name: "multi-menu_first_second-new",
                        path: "/multi-menu/first/second-new",
                        component: "multi",
                        children: [
                            {
                                name: "multi-menu_first_second-new_third",
                                path: "/multi-menu/first/second-new/third",
                                component: "self",
                                meta: {
                                    title: "三级菜单",
                                    icon: "mdi:menu",
                                },
                            },
                        ],
                        meta: {
                            title: "二级菜单(有子菜单)",
                            icon: "mdi:menu",
                        },
                    },
                ],
                meta: {
                    title: "一级菜单",
                    icon: "mdi:menu",
                },
            },
        ],
        meta: {
            title: "多级菜单",
            icon: "carbon:menu",
        },
    },
    {
        name: "management",
        path: "/management",
        component: "basic",
        children: [
            {
                name: "management_auth",
                path: "/management/auth",
                component: "self",
                meta: {
                    title: "权限管理",
                    icon: "ic:baseline-security",
                },
            },
            {
                name: "management_role",
                path: "/management/role",
                component: "self",
                meta: {
                    title: "角色管理",
                    icon: "carbon:user-role",
                },
            },
            {
                name: "management_user",
                path: "/management/user",
                component: "self",
                meta: {
                    title: "用户管理",
                    icon: "ic:round-manage-accounts",
                },
            },
            {
                name: "management_route",
                path: "/management/route",
                component: "self",
                meta: {
                    title: "路由管理",
                    icon: "material-symbols:route",
                },
            },
        ],
        meta: {
            title: "系统管理",
            icon: "carbon:cloud-service-management",
        },
    },
    {
        name: "about",
        path: "/about",
        component: "self",
        meta: {
            title: "关于",
            icon: "fluent:book-information-24-regular",
            singleLayout: true,
        },
    },
];
