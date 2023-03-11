// 引入全局的声明文件
declare module "vue-amap";
declare module "postcss-pxtorem";
interface ViteEnvCustom {
    VITE_APP_BASE: "/";
}
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const vueComponent: DefineComponent<{}, {}, any>;
    export default vueComponent;
}

declare module "vue-bmap-gl";
