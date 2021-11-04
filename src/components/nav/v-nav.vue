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
    isNavbar: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        class: {
          nav: !props.isNavbar,
          "navbar-nav": props.isNavbar,
          "flex-column": props.column,
        },
      }),
      children
    );
  },
};
</script>
