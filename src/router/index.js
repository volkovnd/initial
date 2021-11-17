import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

import { asyncComponentFactory } from "@/utils/components";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || __dirname,
  routes: routes.map(makeRouteAsync),
});

export default router;

function makeRouteAsync(route) {
  return {
    component: asyncComponentFactory(route.component),

    ...route,
  };
}
