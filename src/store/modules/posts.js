import { PostsService } from "@/api";
import {
  DELETE_POST,
  SET_POST_LIST,
  SET_TOTAL_POSTS,
  SUCCESS_LOADED,
  START_LOADING,
  UPDATE_POST_LIST,
} from "@/store/mutation-types";

const initialState = {
  isLoading: true,

  posts: [],
  totalPosts: 0,
};

const state = () => ({ ...initialState });

/** @type {import("vuex").ActionTree} */
const actions = {
  async getPostList({ commit }, params) {
    try {
      commit(START_LOADING);

      const response = await PostsService.query(params);

      if (response.headers["x-total-count"]) {
        commit("SET_TOTAL_POSTS", parseInt(response.headers["x-total-count"]));
      }

      commit(SET_POST_LIST, response.data);
      commit(SUCCESS_LOADED);
    } catch (error) {
      throw new Error(error);
    }
  },
};

/** @type {import("vuex").MutationTree} */
const mutations = {
  [START_LOADING]: (state) => {
    state.isLoading = true;
  },

  [SUCCESS_LOADED]: (state) => {
    state.isLoading = false;
  },

  [DELETE_POST]: (state, postId) => {
    state.posts = state.posts.filter((post) => {
      return post.id !== postId;
    });

    state.totalPosts = state.totalPosts - 1;
  },

  [SET_TOTAL_POSTS]: (state, totalPosts) => {
    state.totalPosts = totalPosts;
  },

  [SET_POST_LIST]: (state, posts) => {
    state.posts = posts;
  },

  [UPDATE_POST_LIST]: (state, data) => {
    state.posts = state.posts.map((post) => {
      if (post.id !== data.id) {
        return post;
      }

      return post;
    });
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
};
