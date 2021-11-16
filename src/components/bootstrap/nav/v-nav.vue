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
    const computedDirectionClass = [props.column ? "flex-column" : null];

    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "nav",
        class: [computedDirectionClass],
      }),
      children
    );
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/nav";
</style>
