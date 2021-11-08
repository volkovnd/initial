---
to: "src/views/<%= h.changeCase.kebab(name) %>.vue"
---
<%
  const componentName = h.changeCase.kebab(name).replace(/-?view$/i, "") + '-view';
  const importName = h.changeCase.pascal(componentName)
  const titleName = h.changeCase.title(name)
%><template>
  <div>
    <h1><%= titleName %></h1>
  </div>
</template>

<script>
export default {
  name: "<%= importName %>",
};
</script>
