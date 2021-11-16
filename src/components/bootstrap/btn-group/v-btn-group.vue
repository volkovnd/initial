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
    toolbar: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    const computedRole = props.toolbar ? "toolbar" : "group";

    const computedToolbarClassMame = [props.toolbar ? "btn-toolbar" : null];
    const computedGroupClass = [!props.toolbar && !props.vertical ? "btn-group" : null];
    const computedGroupDirectionClass = [
      !props.toolbar && props.vertical ? "btn-group-vertical" : props.vertical ? "btn-group-vertical" : null,
    ];
    const computedSizeClass = [!props.toolbar && props.size ? `btn-group-${props.size}` : null];

    return h(
      props.tagName,
      mergeData(data, {
        attrs: { role: computedRole, ariaLabel: props.label },
        class: [computedToolbarClassMame, computedGroupClass, computedGroupDirectionClass, computedSizeClass],
      }),
      children
    );
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/button-group";
</style>
