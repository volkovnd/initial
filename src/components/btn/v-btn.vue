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
    link: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    const tagName = props.link ? "v-link" : "button";

    return h(
      tagName,
      mergeData(data, {
        attrs: {
          type: props.type,

          ...(props.link
            ? {
                role: "button",
              }
            : {}),
        },
        staticClass: "btn",
        class: {
          [`btn-${props.variant}`]: !!props.variant,
          [`btn-${props.size}`]: !!props.size,
        },
      }),
      children
    );
  },
};
</script>
