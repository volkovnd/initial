import Vue from "vue";

import router from "./router";
import store from "./store";

import App from "./App.vue";

import WebFontsPlugin from "@/plugins/web-fonts";
import GlobalComponentsPlugin from "@/plugins/global-components";

Vue.config.productionTip = false;

Vue.use(GlobalComponentsPlugin);
Vue.use(WebFontsPlugin, {
  google: {
    families: ["Open Sans:400,500,700:cyrillic,latin"],
  },
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
