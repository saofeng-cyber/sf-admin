import type { RouteRecordRaw } from "vue-router";

export const baseRoute: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        redirect: "/dashboard/analysis",
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
        meta: {
            title: "登录",
        },
    },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
        meta: {
            title: "页面未找到",
            singleLayout: "blank",
        },
    },
];
