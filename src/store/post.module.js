import { PostsService } from "@/api";
import { FETCH_POST, POST_EDIT, POST_DELETE, POST_RESET_STATE } from "@/store/actions.type";
import { RESET_STATE, SET_POST } from "@/store/mutations.type";

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
  [POST_DELETE](context, postId) {
    return PostsService.destroy(postId);
  },
  [POST_EDIT]({ state }) {
    return PostsService.update(state.post.id, state.post);
  },
  [POST_RESET_STATE]({ commit }) {
    commit(RESET_STATE);
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
