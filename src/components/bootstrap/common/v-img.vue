<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VImg",
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
    fluid: {
      type: Boolean,
      default: false,
    },
    thumbnail: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    const computedFluidClass = [props.fluid ? "img-fluid" : null];
    const computedThumbnailClass = [props.thumbnail ? "img-thumbnail" : null];

    return h(
      props.tagName,
      mergeData(data, {
        attrs: {
          src: props.src,
          alt: props.alt,
        },
        class: [computedFluidClass, computedThumbnailClass],
      }),
      children
    );
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/images";
</style>
