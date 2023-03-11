import { createRouter, createWebHashHistory } from "vue-router";
// import nprogress from "nprogress";
import routes from "./modules/module";
import { handleModuleRoutes } from "@/utils/route";
import { routerPermission } from "./permission";
import { baseRoute } from "./base";
// import { Permission, routerPermission } from "./permission";
console.log(handleModuleRoutes(routes));
const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_APP_BASE),
    routes: [...baseRoute, ...handleModuleRoutes(routes)],
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) savedPosition;
    },
});
// 添加路由权限控制
routerPermission(router);
export default router;
