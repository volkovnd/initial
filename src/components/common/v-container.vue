<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  functional: true,

  props: {
    tagName: {
      type: String,
      default: "div",
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },

  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        class: {
          container: !props.fluid,
          "container-fluid": props.fluid,
        },
      }),
      children
    );
  },
};
</script>
