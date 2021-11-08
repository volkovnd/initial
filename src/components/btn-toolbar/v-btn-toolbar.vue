<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VBtnToolbar",
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
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        attrs: {
          role: "toolbar",
          ariaLabel: props.label,
        },
        staticClass: "btn-toolbar",
      }),
      children
    );
  },
};
</script>
