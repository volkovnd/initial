<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VBtn",
  functional: true,
  props: {
    type: {
      type: String,
      default: "type",
    },
    block: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },

  render: (h, { data, props, children }) => {
    const computedSizeClass = [props.size ? `btn-${props.size}` : null];
    const computedVariantClass = [props.variant ? `btn-${props.outline ? "outline-" : ""}${props.variant}` : null];
    const computedBlockClass = [props.block ? ["d-block", "w-100"] : null];

    return h(
      "button",
      mergeData(data, {
        attrs: {
          type: props.type,
        },
        staticClass: "btn",
        class: [computedVariantClass, computedSizeClass, computedBlockClass],
      }),
      children
    );
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/buttons";
</style>
