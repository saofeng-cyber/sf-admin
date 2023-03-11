export default {
    path: "/auth-demo",
    name: "权限事例",
    redirect: "/auth-demo/permission",
    component: "basic",
    meta: {
        title: "权限示例",
        icon: "ic:baseline-security",
    },
    children: [
        {
            path: "permission",
            name: "permission",
            component: "self",
            meta: {
                title: "权限切换",
                icon: "ic:round-construction",
            },
        },
        {
            path: "super",
            name: "super",
            component: "self",
            meta: {
                title: "超级管理员可见",
                icon: "ic:round-supervisor-account",
                permission: ["super"],
            },
        },
    ],
} as AuthRoute.Route;
