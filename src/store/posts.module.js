import { PostsService } from "@/api";
import { FETCH_POSTS } from "./actions.type";
import { FETCH_START, FETCH_END, UPDATE_POST_IN_LIST } from "./mutations.type";

const initialState = {
  posts: [],
  isLoading: true,
  // postsCount: 0,
};

const state = () => ({ ...initialState });

const actions = {
  [FETCH_POSTS]({ commit }, params) {
    commit(FETCH_START);

    return PostsService.query(params.filter)
      .then(({ data }) => {
        const posts = data;
        // const postsCount = data.length;

        commit(FETCH_END, {
          posts,
          // postsCount,
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

const mutations = {
  [FETCH_START]: (state) => {
    state.isLoading = true;
  },
  [FETCH_END](state, { posts /* postsCount */ }) {
    state.posts = posts;
    // state.postsCount = postsCount;
    state.isLoading = false;
  },
  [UPDATE_POST_IN_LIST](state, data) {
    state.posts = state.posts.map((post) => {
      if (post.slug !== data.slug) {
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
    return state.posts.map((post) => ({
      slug: "/posts/" + post.id,
      ...post,
    }));
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
