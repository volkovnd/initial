import Vue from "vue";
import Vuex from "vuex";

import post from "@/store/modules/post";
import posts from "@/store/modules/posts";

Vue.use(Vuex);

const plugins = [];

if (process.env.NODE_ENV === "development") {
  plugins.push(require("vuex").createLogger());
}

const store = new Vuex.Store({
  modules: {
    post,
    posts,
  },

  plugins,

  strict: process.env.NODE_ENV === "development",
});

export default store;
