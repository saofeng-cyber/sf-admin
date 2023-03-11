import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { request } from "../request";
import { base } from "./config";
const routeServe = new request({
    baseURL: base.base_url,
    timeout: 1000 * 5,
    interceptors: {
        requestInterceptors(config: InternalAxiosRequestConfig) {
            return config;
        },
        responseInterceptors(res: AxiosResponse) {
            return res;
        },
    },
});
export default class Route {
    constructor() {}
    /**
     * 获取角色的路由
     * @param {string} role
     */
    static async getAsyncRoute(role?: string) {
        return routeServe.instance({
            url: "/route",
            method: "post",
            data: {
                role,
            },
        });
    }
}
