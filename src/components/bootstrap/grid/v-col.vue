<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VCol",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "div",
    },
    col: {
      type: [Number, String],
      default: null,
    },
  },
  render: (h, { data, props, children }) => {
    const computedColClass = [props.col != null ? `col${props.col ? "-" + props.col : ""}` : null];

    return h(
      props.tagName,
      mergeData(data, {
        class: [computedColClass],
      }),
      children
    );
  },
};
</script>
