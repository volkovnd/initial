import Vue from "vue";
import VueRouter from "vue-router";

import { BASE_URL } from "@/config";

import { loadRoutes } from "./loadRoutes";

Vue.use(VueRouter);

const routes = loadRoutes();

const router = new VueRouter({
  mode: "history",
  base: BASE_URL,
  routes,
});

export default router;
