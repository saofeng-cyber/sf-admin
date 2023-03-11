import type { RouteComponent } from "vue-router";

export const views: Record<
    RouterPage.RouteKey,
    RouteComponent | Promise<RouteComponent>
> = {
    "vue-doc": () => import("@/views/VueDoc.vue"),
    "vite-doc": () => import("@/views/ViteDoc.vue"),
    "element-plus": () => import("@/views/ElementPlus.vue"),
    "mark-down": () => import("@/views/MarkDown.vue"),
    editor: () => import("@/views/Editor.vue"),
    print: () => import("@/views/Print.vue"),
    "video-play": () => import("@/views/VideoPlay.vue"),
    "vue-map": () => import("@/views/VueMap.vue"),
    logicflow: () => import("@/views/LogicFlow.vue"),
    workbench: () => import("@/views/WorkBench.vue"),
    analysis: () => import("@/views/Analysis.vue"),
    about: () => import("@/views/AboutView.vue"),
    permission: () => import("@/views/Permission.vue"),
    super: () => import("@/views/Super.vue"),
    "basic-table": () => import("@/views/components/table/BasicTab.vue"),
    "basic-form": () => import("@/views/components/form/BasicForm.vue"),
};
