<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VGridCol",
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
    row: {
      type: [Number, String],
      default: null,
    },
    column: {
      type: [Number, String],
      default: null,
    },
    start: {
      type: [Number, String],
      default: null,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        class: {
          [`g-col-${props.col}`]: !!props.col,
          [`g-start-${props.start}`]: !!props.start,
        },
        style: {
          gridColumn: props.column,
          gridRow: props.row,
        },
      }),
      children
    );
  },
};
</script>
