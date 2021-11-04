import Vue from "vue";
import VueRouter from "vue-router";

import { loadRoutes } from "./loadRoutes";

Vue.use(VueRouter);

const routes = loadRoutes();

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || __dirname,
  routes,
});

export default router;
