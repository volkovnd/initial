<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VSpinner",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "div",
    },
    textVariant: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: "loading...",
    },
  },
  render: (h, { data, props }) => {
    let $text = h();

    if (props.text) {
      $text = h("span", {
        domProps: {
          innerHTML: props.text,
        },
        staticClass: "visually-hidden",
      });
    }

    const computedTextVariantClass = [props.textVariant ? `text-${props.textVariant}` : null];

    return h(
      props.tagName,
      mergeData(data, {
        attrs: {
          role: "status",
        },
        staticClass: "spinner-border",
        class: [computedTextVariantClass],
      }),
      [$text]
    );
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/spinners";
</style>
