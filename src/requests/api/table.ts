import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { request } from "../request";
import { base } from "./config";
const tableServe = new request({
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
export default class TableApi {
    constructor() {}
    /**
     * 获取角色的路由
     * @param {string} role
     */
    static async getDepartmentList() {
        return tableServe.instance({
            url: "/getDepartmentList",
            method: "get",
            data: {},
        });
    }
}
