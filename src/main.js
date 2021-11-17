import Vue from "vue";

import router from "./router";
import store from "./store";

import "@/plugins/web-fonts";
import "@/plugins/bootstrap";
import "@/plugins/global-components";
import "@/plugins/animate-css";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
