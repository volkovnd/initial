<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VCol",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "div",
    },
    cols: {
      type: [Number, String],
      default: "",
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        class: {
          col: props.cols === "",
          [`col-${props.cols}`]: !!props.cols,
        },
      }),
      children
    );
  },
};
</script>

<style lang="scss">
.col,
.col-auto,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
  display: block;
  padding-right: $gutter;
  padding-left: $gutter;
}

.col {
  flex: 1 0;
  width: auto;
  max-width: 100%;
}

@for $index from 1 through 12 {
  .col-#{$index} {
    flex: 0 0 100% * $index / 12;
    width: 100%;
    max-width: 100% * $index / 12;
  }
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}
</style>
