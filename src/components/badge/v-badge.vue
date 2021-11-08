<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VBadge",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "span",
    },
    bg: {
      type: String,
      default: null,
    },
    rounded: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: null,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "badge",
        class: {
          [`bg-${props.bg}`]: !!props.bg,
          [`rounded-${props.rounded}`]: !!props.rounded,
          [`text-${props.variant}`]: !!props.variant,
        },
      }),
      children
    );
  },
};
</script>
