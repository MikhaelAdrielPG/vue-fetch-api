import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import ProductDetailVue from "@/views/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      component: ProductDetailVue,
      props: true, // Menggunakan props untuk menerima ID produk dari URL
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
