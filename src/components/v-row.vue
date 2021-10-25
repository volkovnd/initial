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
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "row",
        class: {
          "row-column": props.column,
        },
      }),
      children
    );
  },
};
</script>

<style lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -$gutter;
  margin-left: -$gutter;

  &-column {
    flex-direction: column;
  }
}
</style>
