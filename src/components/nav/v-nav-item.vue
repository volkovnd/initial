<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VNavItem",
  functional: true,
  render: (h, data, props, children) => {
    return h(
      "v-link",
      mergeData(data, {
        staticClass: "nav-item nav-link",
      }),
      children
    );
  },
};
</script>
