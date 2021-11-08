<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VBtn",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "button",
    },
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
    return h(
      props.tagName,
      mergeData(data, {
        attrs: {
          type: props.type,
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
