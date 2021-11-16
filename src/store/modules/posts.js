import { PostsService } from "@/api";
import { FETCH_POSTS } from "@/store/types/actions";
import { FETCH_START, FETCH_END, UPDATE_POST_IN_LIST, DELETE_POST_IN_LIST } from "@/store/types/mutations";

const initialState = {
  isLoading: true,

  posts: [],
  totalPosts: 0,
};

const state = () => ({ ...initialState });

const actions = {
  async [FETCH_POSTS]({ commit }, params) {
    try {
      commit(FETCH_START);

      const response = await PostsService.query(params);

      const data = response.data;

      const posts = data.list ? data.list : data;
      const totalPosts = data.total || null;

      commit(FETCH_END, {
        posts,
        totalPosts,
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

  [FETCH_END](state, { posts, totalPosts }) {
    state.posts = posts;
    if (totalPosts) state.totalPosts = totalPosts;

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
  [DELETE_POST_IN_LIST](state, postId) {
    state.posts = state.posts.filter((post) => {
      return post.id !== postId;
    });

    state.totalPosts = state.totalPosts - 1;
  },
};

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
