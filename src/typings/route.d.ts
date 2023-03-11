// import type { Component } from "vue";
declare namespace AuthRoute {
    /** 根路由路径 */
    type RootRoutePath = "/";

    /**
     * 路由的组件
     * - basic - 基础布局，具有公共部分的布局
     * - blank - 空白布局
     * - multi - 多级路由布局(三级路由或三级以上时，除第一级路由和最后一级路由，其余的采用该布局)
     * - self - 作为子路由，使用自身的布局(作为最后一级路由，没有子路由)
     */
    type RouteComponentType = "basic" | "blank" | "multi" | "self";
    type RoleType = keyof typeof import("@/enum/business").UserCode;

    interface RouteMeta {
        title: string;
        icon?: string;
        singleLayout?: RouteComponentType;
        permission?: RoleType[];
    }
    type Route = {
        /** 路由名称(路由唯一标识) */
        name: string;
        /** 路由路径 */
        path: string;
        /** 路由重定向 */
        redirect?: string;
        /**
         * 路由组件
         * - basic: 基础布局，具有公共部分的布局
         * - blank: 空白布局
         * - multi: 多级路由布局(三级路由或三级以上时，除第一级路由和最后一级路由，其余的采用该布局)
         * - self: 作为子路由，使用自身的布局(作为最后一级路由，没有子路由)
         */
        component?: RouteComponentType;
        /** 子路由 */
        children?: Array<Route>;
        /** 路由描述 */
        meta?: RouteMeta;
    };
    type RouteModule = Record<string, { default: Route }>;
}
