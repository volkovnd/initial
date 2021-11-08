import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./loadRoutes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || __dirname,
  routes,
});

export default router;
