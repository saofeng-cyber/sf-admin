import layout from "@/layout/Menu.vue";
import type { RouteRecordRaw } from "vue-router";
import { views } from "./routeKey";

const transformRoute = (item: AuthRoute.Route) => {
    const resultRoutes: Array<RouteRecordRaw> = [];
    const itemRoute = { ...item } as RouteRecordRaw;
    if (hasComponent(item)) {
        const actions: ComponentType = {
            basic: () => {
                itemRoute.component = layout;
            },
            self: () => {
                itemRoute.component = getViewComponent(
                    itemRoute.name as RouterPage.RouteKey
                );
            },
            multi: () => {
                if (hasChildren(item)) {
                    Object.assign(itemRoute, {
                        meta: { ...itemRoute.meta, multi: true },
                    });
                    delete itemRoute.component;
                } else {
                    window.console.error("多级路由缺少子路由: ", item);
                }
            },
        };
        actions[item.component as keyof ComponentType]();
    }
    if (isSingle(item)) {
        if (item.component === "self") {
            itemRoute.component = getViewComponent(
                itemRoute.name as RouterPage.RouteKey
            );
        }
        const parentPath = item.path;
        const parentRoute: RouteRecordRaw = {
            path: parentPath,
            component: layout,
            children: [itemRoute],
        };
        return parentRoute;
    }
    if (hasChildren(item)) {
        const children = (item.children as AuthRoute.Route[])
            .map((child) => {
                return transformRoute(child);
            })
            .flat(1);
        if (item.component === "multi") {
            resultRoutes.push(...children);
            delete itemRoute.children;
        } else {
            itemRoute.children = children as RouteRecordRaw[];
        }
    }
    resultRoutes.push(itemRoute);
    return resultRoutes;
};

export const handleModuleRoutes = (modules: AuthRoute.Route[]) => {
    return modules.map((route) => transformRoute(route)).flat(1);
};

/**
 * 是否有子路由
 * @param item - 权限路由
 */
function hasChildren(item: AuthRoute.Route) {
    return Boolean(item.children && item.children.length);
}

/**
 * 组装子路由
 * @param key - RouterPage.RouteKey
 */
function getViewComponent(key: RouterPage.RouteKey) {
    return views[key];
}

/**
 * 判断是否是单独路由
 */
function isSingle(item: AuthRoute.Route) {
    return Boolean(item.meta?.singleLayout);
}
/**
 * 是否有路由组件
 * @param item - 权限路由
 */
function hasComponent(item: AuthRoute.Route) {
    return Boolean(item.component);
}
