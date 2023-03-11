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
declare module "@fullcalendar/daygrid";
declare module "@fullcalendar/interaction";
declare module "@fullcalendar/timegrid";
declare module "dropzone";
declare module "photoswipe/lightbox";
declare module "sweetalert2";
