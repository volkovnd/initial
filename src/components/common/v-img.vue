<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "img",
    },
    alt: {
      type: String,
      default: "",
    },
    src: {
      type: String,
      required: true,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        attrs: {
          src: props.src,
          alt: props.alt,
        },
        class: {
          "d-block w-100": props.block,
        },
      }),
      children
    );
  },
};
</script>
