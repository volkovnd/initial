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
    cols: {
      type: [Number, String],
      default: "",
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        class: {
          col: props.cols === "",
          [`col-${props.cols}`]: !!props.cols,
        },
      }),
      children
    );
  },
};
</script>
