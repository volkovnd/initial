import { toInteger } from "@/utils/number";
import { PostsService } from "@/api";
import {
  SET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_TOTAL_POSTS,
  START_LOADING,
  END_LOADING,
} from "@/store/mutation-types";

const initialState = {
  posts: [],

  isLoading: false,
  totalPosts: 0,
};

const state = () => ({ ...initialState });

/** @type {import("vuex").ActionTree} */
const actions = {
  async getPosts({ commit }, params) {
    commit(START_LOADING);

    const response = await PostsService.query(params);

    commit(SET_POSTS, response.data);

    if (response.headers["x-total-count"]) {
      commit("SET_TOTAL_POSTS", toInteger(response.headers["x-total-count"]));
    }

    commit(END_LOADING);
  },

  async fetchPost({ commit }, id) {
    commit(START_LOADING);

    const response = await PostsService.get(id);

    commit(END_LOADING);

    return response.data;
  },

  async addPost({ commit, state }, data) {
    await PostsService.create(data);

    commit(CREATE_POST);

    const totalPosts = state.totalPosts + 1;

    commit(SET_TOTAL_POSTS, totalPosts);
  },

  async deletePost({ commit, state }, id) {
    await PostsService.destroy(id);

    commit(DELETE_POST, id);

    const totalPosts = state.totalPosts - 1;

    commit(SET_TOTAL_POSTS, totalPosts);
  },
};

/** @type {import("vuex").MutationTree} */
const mutations = {
  [SET_POSTS]: (state, posts) => {
    state.posts = posts;
  },

  [CREATE_POST]: () => {},

  [DELETE_POST]: (state, id) => {
    const index = state.posts.findIndex((post) => {
      return post.id === id;
    });

    if (index != null) {
      state.posts.splice(index, 1);
    }
  },

  [UPDATE_POST]: (state, data) => {
    const index = state.posts.findIndex((post) => post.id === data.id);

    if (index != null) {
      state.posts[index] = data;
    }
  },

  [SET_TOTAL_POSTS]: (state, totalPosts) => {
    state.totalPosts = totalPosts;
  },

  [START_LOADING]: (state) => {
    state.isLoading = true;
  },

  [END_LOADING]: (state) => {
    state.isLoading = false;
  },
};

/** @type {import("vuex").GetterTree} */
const getters = {
  posts(state) {
    return state.posts;
  },

  isLoading(state) {
    return state.isLoading;
  },

  totalPosts(state) {
    return state.totalPosts;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
};
