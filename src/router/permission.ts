import { RouterModule } from "@/stores/modules/route/RouterModel";
import nprogress from "nprogress";
import type { Router } from "vue-router";
export const routerPermission = (router: Router) => {
    router.beforeEach((to, from, next) => {
        document.title = to.meta.title as string;
        nprogress.inc();
        const useRouterModule = RouterModule();
        const { token, role } = storeToRefs(useRouterModule);
        if (!token.value) {
            if (to.name === "login") {
                next();
                return;
            }
            next({ path: "/login", replace: true });
        }
        if (token.value) {
            if (
                to.meta.permission &&
                !(to.meta.permission as AuthRoute.RoleType[]).includes(
                    role.value
                )
            ) {
                next({ name: "NotFound" });
                return;
            }
            next();
        }
    });
    router.afterEach(() => {
        nprogress.done();
    });
};
