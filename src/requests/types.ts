// types.ts
import type {
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from "axios";
export interface RequestInterceptors {
    // 请求拦截
    requestInterceptors?: (
        config: InternalAxiosRequestConfig
    ) => InternalAxiosRequestConfig;
    // 响应拦截
    responseInterceptors?: (config: AxiosResponse) => AxiosResponse;
}
// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
    interceptors?: RequestInterceptors;
}
