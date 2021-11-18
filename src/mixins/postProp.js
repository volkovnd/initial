export default {
  props: {
    author: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      post: {
        author: this.author,
        title: this.title,
      },
    };
  },
};
