import * as VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Cart from "@/views/Cart.vue";
import ProductsIndex from "@/views/ProductsIndex.vue";
import ProductDetail from "@/views/ProductDetail.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/products",
        name: "products",
        component: ProductsIndex,
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart,
    },
    {
        path: "/product/:id",
        name: "product-detail",
        component: ProductDetail,
    },
    {
        path: "/logged_in",
        name: "logged-in",
        component: Home,
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

export default router;

