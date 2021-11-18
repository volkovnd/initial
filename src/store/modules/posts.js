import { PostsService } from "@/api";
import {
  SET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_TOTAL_POSTS,
  INCREMENT_TOTAL_POSTS,
  DECREMENT_TOTAL_POSTS,
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
    try {
      commit(START_LOADING);

      const response = await PostsService.query(params);

      commit(SET_POSTS, response.data);

      if (response.headers["x-total-count"]) commit("SET_TOTAL_POSTS", response.headers["x-total-count"]);

      commit(END_LOADING);
    } catch (error) {
      throw new Error("Error while getting posts!!!");
    }
  },

  async fetchPostData({ commit }, postId) {
    try {
      commit(START_LOADING);

      const response = await PostsService.get(postId);

      commit(END_LOADING);

      return response.data;
    } catch (err) {
      throw new Error("Error while fetching data!!!");
    }
  },

  async addPost({ commit }, data) {
    try {
      await PostsService.create(data);

      commit(CREATE_POST, data);
      commit(INCREMENT_TOTAL_POSTS);
    } catch (err) {
      throw new Error("Error while creating new post!!!");
    }
  },

  async deletePost({ commit }, postId) {
    try {
      await PostsService.destroy(postId);

      commit(DELETE_POST, postId);
      commit(DECREMENT_TOTAL_POSTS);
    } catch (err) {
      throw new Error("Error while deleting post!!!");
    }
  },
};

/** @type {import("vuex").MutationTree} */
const mutations = {
  [SET_POSTS]: (state, posts) => {
    state.posts = posts;
  },

  [CREATE_POST]: () => {},

  [DELETE_POST]: (state, postId) => {
    const deleteIndex = state.posts.findIndex((post) => {
      return post.id === postId;
    });

    state.posts.splice(deleteIndex, 1);
  },

  [UPDATE_POST]: (state, data) => {
    const updateIndex = state.posts.findIndex((post) => post.id === data.id);

    state.posts[updateIndex] = data;
  },

  [SET_TOTAL_POSTS]: (state, totalPosts) => {
    state.totalPosts = totalPosts;
  },

  [INCREMENT_TOTAL_POSTS]: (state) => {
    state.totalPosts = state.totalPosts + 1;
  },

  [DECREMENT_TOTAL_POSTS]: (state) => {
    state.totalPosts = state.totalPosts - 1;
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
};
