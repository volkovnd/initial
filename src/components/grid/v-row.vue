<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VRow",
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
    alignV: {
      type: String,
      default: null,
    },
    alignH: {
      type: String,
      default: null,
    },
    noGutters: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "row",
        class: {
          "flex-column": props.column,
          [`align-items-${props.alignV}`]: !!props.alignV,
          [`justify-content-${props.alignH}`]: !!props.alignH,
          "no-gutters": props.noGutters,
        },
      }),
      children
    );
  },
};
</script>
