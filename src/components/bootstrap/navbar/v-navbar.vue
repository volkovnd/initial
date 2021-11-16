<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VNavbar",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "nav",
    },
    variant: {
      type: String,
      default: null,
    },
    bgVariant: {
      type: String,
      default: null,
    },
    expand: {
      type: String,
      default: null,
    },
  },
  render: (h, { data, props, children }) => {
    const computedVariantClass = [props.variant ? `navbar-${props.variant}` : null];
    const computedBgVariantClass = [props.bgVariant ? `bg-${props.bgVariant}` : null];
    const computedExpandClass = [
      props.expand != null ? [`navbar-expand${props.expand ? "-" + props.expand : ""}`] : null,
    ];

    return h(
      props.tagName,
      mergeData(data, {
        class: ["navbar", computedVariantClass, computedBgVariantClass, computedExpandClass],
      }),
      children
    );
  },
};
</script>
