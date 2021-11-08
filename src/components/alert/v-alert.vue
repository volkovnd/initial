<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VAlert",
  functional: true,
  props: {
    variant: {
      type: String,
      default: null,
    },
    headingText: {
      type: String,
      default: null,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      "v-link",
      mergeData(data, {
        attrs: {
          role: "alert",
        },
        staticClass: "alert",
        class: {
          [`alert-${props.variant}`]: !!props.variant,
        },
      }),
      children
    );
  },
};
</script>
