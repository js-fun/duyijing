import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // linkActiveClass : "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/help",
      name: "help",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HelpView.vue"),
    },
    {
      path: "/gua/:id",
      name: "gua",
      component: () => import("../views/GuaView.vue"),
    },
    {
      path: "/doc/:type/:id",
      name: "doc",
      component: () => import("../views/DocView.vue"),
    },
    {
      path: "/doc/xi-ci/:id",
      name: "xi-ci-1",
      component: () => import("../views/XiCiView.vue"),
    },
    {
      path: "/doc/wen-yan",
      name: "wen-yan",
      component: () => import("../views/WenYanView.vue"),
    },
    {
      path: "/doc/shuo-gua",
      name: "shuo-gua",
      component: () => import("../views/ShuoGuaView.vue"),
    },
    {
      path: "/doc/xu-gua",
      name: "xu-gua",
      component: () => import("../views/XuGuaView.vue"),
    },
    {
      path: "/doc/za-gua",
      name: "za-gua",
      component: () => import("../views/ZaGuaView.vue"),
    },
  ],
});

export default router;
