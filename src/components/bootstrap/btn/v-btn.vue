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
    variant: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
  },

  render: (h, { data, props, children }) => {
    const computedSizeClass = [props.size ? `btn-${props.size}` : null];
    const computedVariantClass = [props.variant ? `btn-${props.variant}` : null];

    return h(
      "button",
      mergeData(data, {
        attrs: {
          type: props.type,
        },
        staticClass: "btn",
        class: [computedVariantClass, computedSizeClass],
      }),
      children
    );
  },
};
</script>
