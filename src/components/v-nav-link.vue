<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VNavLink",
  functional: true,
  render: (h, data, props, children) => {
    return h(
      "v-link",
      mergeData(data, {
        staticClass: "nav-link",
      }),
      children
    );
  },
};
</script>

<style lang="scss">
.nav-link {
  display: block;
  padding: $gutter / 2 $gutter;
}
</style>
