<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VNavbarBrand",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "a",
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "navbar-brand",
      }),
      children
    );
  },
};
</script>
