<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  functional: true,

  props: {
    tagName: {
      type: String,
      default: "div",
    },
  },

  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "container",
      }),
      children
    );
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  max-width: $container-max-width;
  padding-right: $gutter;
  padding-left: $gutter;
  margin-right: auto;
  margin-left: auto;
}
</style>
