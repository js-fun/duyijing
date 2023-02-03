import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: "/xi-ci-1",
      name: "xi-ci-1",
      component: () => import("../views/XiCi1View.vue"),
    },
    {
      path: "/xi-ci-2",
      name: "xi-ci-2",
      component: () => import("../views/XiCi2View.vue"),
    },
    {
      path: "/wen-yan",
      name: "wen-yan",
      component: () => import("../views/WenYanView.vue"),
    },
    {
      path: "/shuo-gua",
      name: "shuo-gua",
      component: () => import("../views/ShuoGuaView.vue"),
    },
    {
      path: "/xu-gua",
      name: "xu-gua",
      component: () => import("../views/XuGuaView.vue"),
    },
    {
      path: "/za-gua",
      name: "za-gua",
      component: () => import("../views/ZaGuaView.vue"),
    },

  ],
});

export default router;
