import Vue from "vue";
import Vuex from "vuex";

import { loadModules } from "./loadModules";

Vue.use(Vuex);

const { modules, context } = loadModules();

const store = new Vuex.Store({
  modules,

  strict: process.env.NODE_ENV !== "production",
});

if (module.hot) {
  module.hot.accept(context.id, () => {
    const { modules } = loadModules();

    store.hotUpdate({
      modules,
    });
  });
}

export default store;
