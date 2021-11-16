import { PostsService } from "@/api";
import { FETCH_POSTS } from "./actions.type";
import { FETCH_START, FETCH_END, UPDATE_POST_IN_LIST } from "./mutations.type";

const initialState = {
  isLoading: true,

  posts: [],
};

const state = () => ({ ...initialState });

const actions = {
  async [FETCH_POSTS]({ commit }, params) {
    try {
      commit(FETCH_START);

      const { data } = await PostsService.query(params.filter);

      commit(FETCH_END, {
        posts: data,
      });
    } catch (error) {
      throw new Error(error);
    }
  },
};

const mutations = {
  [FETCH_START]: (state) => {
    state.isLoading = true;
  },

  [FETCH_END](state, { posts }) {
    state.posts = posts;

    state.isLoading = false;
  },

  [UPDATE_POST_IN_LIST](state, data) {
    state.posts = state.posts.map((post) => {
      if (post.id !== data.id) {
        return post;
      }

      return post;
    });
  },
};

const getters = {
  postsCount(state) {
    return state.posts.length;
  },

  posts(state) {
    return state.posts;
  },

  isLoading(state) {
    return state.isLoading;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
