export default {
    path: "/comp",
    name: "comp",
    component: "basic",
    meta: {
        title: "组件",
        icon: "bx:coin-stack",
    },
    children: [
        {
            path: "basic-table",
            name: "basic-table",
            component: "self",
            meta: {
                title: "基础表格",
                icon: "material-symbols:backup-table",
            },
        },
        {
            path: "basic-form",
            name: "basic-form",
            component: "self",
            meta: {
                title: "基础表单",
                icon: "material-symbols:backup-table",
            },
        },
    ],
} as AuthRoute.Route;
