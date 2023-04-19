import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { request } from "../request";
import { OPENAI_API_KEY } from "./config";
import { ElLoading } from "element-plus";
const openApi = new request({
    baseURL: "https://api.openai.com" + import.meta.env.VITE_APP_OPENAPI,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    interceptors: {
        requestInterceptors(config: InternalAxiosRequestConfig) {
            ElLoading.service({
                lock: true,
                text: "Loading",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)",
            });
            return config;
        },
        responseInterceptors(res: AxiosResponse) {
            return res;
        },
    },
});

export default class OpenApi {
    static async getCompletion(prompt: string) {
        return openApi.instance({
            url: "/completions",
            method: "post",
            data: {
                model: "text-davinci-003",
                prompt,
                max_tokens: 1000,
                temperature: 0,
            },
        });
    }
}
