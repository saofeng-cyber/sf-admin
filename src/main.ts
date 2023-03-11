import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaCustomPlugin from "@/utils/piniaCustomPlugin";
import App from "./App.vue";
import "nprogress/nprogress.css";
import router from "./router";
import { useI18n } from "@/i18n/index";
// import VueBMap, { initBMapApiLoader } from "vue-bmap-gl";
import countTo from "vue3-count-to";
import IconifyVue from "@/components/Iconify.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import moment from "moment";
import "vue-bmap-gl/dist/style.css";
import "virtual:svg-icons-register";
// initBMapApiLoader({
//     ak: "XAFTV4uo7lrQb83DBA7zGwBg9oNRz8GW",
// });

import "@/assets/main.css";
import "@/styles/index.scss";
import { useDirectives } from "./utils/directives";
const app = createApp(App);
useDirectives(app);
useI18n(app);
const pinia = createPinia();
pinia.use(piniaCustomPlugin);
app.component("IconifyVue", IconifyVue);
app.component("SvgIcon", SvgIcon);
app.config.globalProperties.$moment = moment;
// app.use(VueBMap);
app.use(countTo);
app.use(pinia);
app.use(router);
app.mount("#app");
