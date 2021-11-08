<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VBtnGroup",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "div",
    },
    label: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        attrs: { role: "group", ariaLabel: props.label },
        class: {
          "btn-group": !props.vertical,
          "btn-group-vertical": props.vertical,
          [`btn-group-${props.size}`]: !!props.size,
        },
      }),
      children
    );
  },
};
</script>
