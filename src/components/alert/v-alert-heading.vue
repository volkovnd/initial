<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VAlertHeading",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "h4",
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "alert-heading",
      }),
      children
    );
  },
};
</script>
