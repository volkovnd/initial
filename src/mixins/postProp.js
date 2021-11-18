export default {
  props: {
    post: {
      type: Object,
      default: () => require("@/models/posts.json"),
    },
  },
  data() {
    return {
      currentPost: {
        ...this.post,
      },
    };
  },
};
