import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/layout/default.vue";

import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || __dirname,
  routes: [
    {
      path: "",
      component: DefaultLayout,
      children: routes,
    },
  ],
});

export default router;
