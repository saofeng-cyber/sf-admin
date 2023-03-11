import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { request } from "../request";
import { base } from "./config";
interface LoginParam {
    username: string;
    password: string;
}
const loginServe = new request({
    baseURL: base.base_url,
    timeout: 1000 * 60 * 5,
    interceptors: {
        requestInterceptors(config: InternalAxiosRequestConfig) {
            return config;
        },
        responseInterceptors(res: AxiosResponse) {
            return res;
        },
    },
});
export default class Auth {
    constructor() {}
    /**
     * 获取角色的路由
     * @param {LoginParam} params
     */
    static async login(params: LoginParam) {
        return loginServe.instance({
            url: "/login",
            method: "post",
            data: {
                ...params,
            },
        });
    }
}
