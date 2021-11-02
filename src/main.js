import Vue from "vue";

import router from "./router";
import store from "./store";

import App from "./App.vue";

import { WebFontsPlugin } from "@/plugins/web-fonts";
import { GlobalComponentsPlugin } from "@/plugins/global-components";

import { registerPlugins } from "@/utils/plugins";

Vue.config.productionTip = false;

registerPlugins(Vue, [WebFontsPlugin, GlobalComponentsPlugin]);

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
