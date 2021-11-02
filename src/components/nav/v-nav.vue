<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VNav",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "nav",
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "nav",
      }),
      children
    );
  },
};
</script>

<style lang="scss">
.nav {
  display: flex;
  flex-wrap: wrap;
}
</style>
