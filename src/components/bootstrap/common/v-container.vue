<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VContainer",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "div",
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    const computedFluidClassName = [props.fluid ? "container-fluid" : "container"];

    return h(
      props.tagName,
      mergeData(data, {
        class: [computedFluidClassName],
      }),
      children
    );
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/containers";
</style>
