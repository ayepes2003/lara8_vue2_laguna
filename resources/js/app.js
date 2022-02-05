require("./bootstrap");
import vue from "vue";
window.Vue = vue;

import App from "./components/App.vue";
//importamos Axios
import VueAxios from "vue-axios";
import axios from "axios";

//Importamos y configuramos el Vue-router
import VueRouter from "vue-router";
import { routes } from "./routes";

import vSelect from "vue-select";
Vue.component("pagination", require("laravel-vue-pagination"));

Vue.use(Notifications);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import Notifications from "vue-notification";

const Header = () => import("./components/layout/Header.vue");

import formcutcontrol from "./components/workdaily/FormCutControl.vue";
import Dialog from "./components/comun/Dialog.vue";

export const RUTA_SERVIDOR = process.env.VUE_APP_RUTA_API;

const router = new VueRouter({
    mode: "history",
    routes: routes,
});

//finalmente, definimos nuestra app de Vue
const app = new Vue({
    el: "#app",
    router: router,
    render: (h) => h(App),
});
