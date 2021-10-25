import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import * as plugins from "@/plugins";

import { registerPlugins } from "@/utils/plugins";

Vue.config.productionTip = false;

registerPlugins(Vue, plugins);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
