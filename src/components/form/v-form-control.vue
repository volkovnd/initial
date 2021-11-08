<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VFormControl",
  functional: true,
  props: {
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: null,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      "input",
      mergeData(data, {
        staticClass: "form-control",
        class: {
          [`form-control-${props.size}`]: !!props.size,
        },
      }),
      children
    );
  },
};
</script>
