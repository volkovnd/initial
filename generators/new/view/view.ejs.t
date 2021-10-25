---
to: "src/views/<%= h.changeCase.kebab(name) %>.vue"
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.pascal(fileName)
  const titleName = h.changeCase.title(name)
%><template>
  <DefaultLayout>
    <h1><%= titleName %></h1>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/index.vue";

export default {
  name: "<%= importName %>",
  components: {
    DefaultLayout,
  },
};
</script>
