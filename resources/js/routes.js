const Home = () => import("./components/layout/Home.vue");

//importamos los componentes para el blog
const Contacto = () => import("./components/contacto/Contacto.vue");
const Mostrar = () => import("./components/blog/Mostrar.vue");
const Crear = () => import("./components/blog/Crear.vue");
const Editar = () => import("./components/blog/Editar.vue");

//laguna Herbs Demo

const Products = () => import("./components/products/Products.vue");
const ControlCorte = () => import("./components/workdaily/CutGridTable.vue");
const SalaControl = () => import("./components/workdaily/SalaGridTable.vue");

const FormCutControl = () =>
    import("./components/workdaily/FormCutControl.vue");

export const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
    },
    {
        name: "products",
        path: "/products",
        component: Products,
    },
    {
        name: "formcutcontrol",
        path: "/formcutcontrol",
        component: FormCutControl,
    },
    {
        name: "controlcorte",
        path: "/controlcorte",
        component: ControlCorte,
    },
    {
        name: "salacontrol",
        path: "/salacontrol",
        component: SalaControl,
    },
];
