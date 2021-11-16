<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VRow",
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
    alignV: {
      type: String,
      default: null,
    },
    alignH: {
      type: String,
      default: null,
    },
    noGutters: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    const computedDirectionClass = [props.column ? "flex-column" : null];
    const computedAlignItemsClass = [props.alignV ? `align-items-${props.alignV}` : null];
    const computedJustifyContentClass = [props.alignH ? `justify-content-${props.alignH}` : null];
    const computedGuttersClass = [props.noGutters ? `no-gutters` : null];

    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "row",
        class: [computedDirectionClass, computedAlignItemsClass, computedJustifyContentClass, computedGuttersClass],
      }),
      children
    );
  },
};
</script>
