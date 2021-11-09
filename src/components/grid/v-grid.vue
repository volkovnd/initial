<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VGrid",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "div",
    },
    columns: {
      type: [String, Number],
      default: null,
    },
    rows: {
      type: [String, Number],
      default: null,
    },
    gap: {
      type: [String, Number],
      default: null,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "grid",
        style: {
          "--bs-columns": props.columns,
          "--bs-rows": props.rows,
          "--bs-gap": props.gap,
        },
      }),
      children
    );
  },
};
</script>
