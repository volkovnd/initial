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
    variant: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: "loading...",
    },
  },
  render: (h, { data, props, slots }) => {
    return h(
      props.tagName,
      mergeData(data, {
        attrs: {
          role: "status",
        },
        staticClass: "spinner-border",
        class: {
          [`text-${props.variant}`]: !!props.variant,
        },
      }),
      [
        h(
          "span",
          {
            staticClass: "visually-hidden",
          },
          [slots().default || props.text]
        ),
      ]
    );
  },
};
</script>
