import { PostsService } from "@/api";
import { FETCH_POST, POST_EDIT, POST_DELETE, POST_RESET_STATE, POST_CREATE } from "@/store/types/actions";
import { RESET_STATE, SET_POST, DELETE_POST_IN_LIST } from "@/store/types/mutations";

const initialState = {
  post: {
    author: "",
    title: "",
  },
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_POST](context, postId, prevPost) {
    if (prevPost !== undefined) {
      return context.commit(SET_POST, prevPost);
    }
    const { data } = await PostsService.get(postId);

    context.commit(SET_POST, data);

    return data;
  },

  async [POST_DELETE]({ commit }, postId) {
    await PostsService.destroy(postId);

    commit(DELETE_POST_IN_LIST, postId);
  },

  async [POST_EDIT]({ state }) {
    const data = await PostsService.update(state.post.id, state.post);

    return data;
  },

  [POST_RESET_STATE]({ commit }) {
    commit(RESET_STATE);
  },

  async [POST_CREATE]({ state }) {
    const data = await PostsService.create(state.post);

    return data;
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_POST](state, post) {
    state.post = post;
  },
  [RESET_STATE]() {
    for (const f in state) {
      state[f] = initialState;
    }
  },
};

const getters = {
  post(state) {
    return state.post;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
