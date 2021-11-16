<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "VAlertLink",
  functional: true,
  render: (h, { data, children }) => {
    return h(
      "v-link",
      mergeData(data, {
        staticClass: "alert-link",
      }),
      children
    );
  },
};
</script>
