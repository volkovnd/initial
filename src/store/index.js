import Vue from "vue";
import Vuex from "vuex";

import posts from "@/store/posts.module";
import post from "@/store/post.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    post,
    posts,
  },

  strict: process.env.NODE_ENV === "development",
});

export default store;
