<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VNav",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "div",
    },
    column: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "nav",
        class: {
          "flex-column": props.column,
        },
      }),
      children
    );
  },
};
</script>
