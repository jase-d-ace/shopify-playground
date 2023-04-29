import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";
import Cart from "@/views/Cart.vue";
import ProductsIndex from "@/views/ProductsIndex.vue";
import ProductDetail from "@/views/ProductDetail.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: App,
    },
    {
        path: "/products",
        name: "products",
        component: ProductsIndex
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart
    },
    {
        path: "/product/:id",
        name: "product-detail",
        component: ProductDetail
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

