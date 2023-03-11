import axios, {
    type AxiosInstance,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
} from "axios";

import type { RequestConfig, RequestInterceptors } from "./types";
export class request {
    instance: AxiosInstance;
    interceptorsObj?: RequestInterceptors;
    constructor(config: RequestConfig) {
        this.instance = axios.create(config);
        this.interceptorsObj = config.interceptors;
        this.instance.interceptors.request.use(
            (req: InternalAxiosRequestConfig) => {
                console.log("全局请求");
                return req;
            },
            (err: any) => {
                Promise.reject(err);
            }
        );
        // 使用实例拦截器
        this.instance.interceptors.request.use(
            this.interceptorsObj?.requestInterceptors
        );
        this.instance.interceptors.response.use(
            this.interceptorsObj?.responseInterceptors
        );
        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                return res.data;
            },
            (err: any) => Promise.reject(err)
        );
    }
}
