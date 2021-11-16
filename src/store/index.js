import Vue from "vue";
import Vuex from "vuex";

import post from "@/store/post.module";
import posts from "@/store/posts.module";

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
