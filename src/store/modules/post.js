import { PostsService } from "@/api";

import { DELETE_POST, SET_POST, UPDATE_POST, CREATE_POST } from "@/store/mutation-types";

const initialState = {
  post: {
    author: "",
    title: "",
  },
};

const state = { ...initialState };

const actions = {
  async getPost(context, postId) {
    const response = await PostsService.get(postId);

    const post = response.data;

    context.commit(SET_POST, post);

    return post;
  },

  async deletePost({ commit }, postId) {
    await PostsService.destroy(postId);

    commit(DELETE_POST, postId);
  },

  async updatePost({ commit }, data) {
    await PostsService.update(state.post.id, data);

    commit(UPDATE_POST, data);
  },

  async createPost({ commit }, data) {
    await PostsService.create(data);

    commit(CREATE_POST, data);
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SET_POST]: (state, data) => {
    state.post = data;
  },
};

const getters = {
  post(state) {
    return state.post;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
