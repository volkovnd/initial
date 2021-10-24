import Vue from "vue";
import VueRouter from "vue-router";

import { BASE_URL } from "@/config";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/about.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: BASE_URL,
  routes,
});

export default router;
