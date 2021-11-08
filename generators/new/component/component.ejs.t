---
to: "src/components/<%= h.changeCase.kebab(name) %>.vue"
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.pascal(fileName)
  const className = h.changeCase.kebab(name)
%><%
if (!isFunctional) {
%><template>
  <div class="<%= className %>">

  </div>
</template>

<script>
export default {
  name: "<%= importName %>",
};
</script><%
} else {
%><script>
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "<%= importName %>",
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "div",
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "<%= className %>",
      }),
      children
    );
  },
};
</script><%
}
%>

<style lang="scss">
.<%= className %> {

}
</style>
