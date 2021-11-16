<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VListInline",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "div",
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "list-inline",
      }),
      children
    );
  },
};
</script>
