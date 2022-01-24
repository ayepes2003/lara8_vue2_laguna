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

import formcutcontrol from "./components/workdaily/FormCutControl.vue";

Vue.component("pagination", require("laravel-vue-pagination"));

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// import { VuejsDatatableFactory } from "vuejs-datatable";

// Vue.use(VuejsDatatableFactory);

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
