---
to: "src/layout/<%= h.changeCase.kebab(name) %>.vue"
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.pascal(fileName)
  const className = h.changeCase.kebab(name)
%><template>
  <div class="<%= className %>">
    <v-container>
      <slot />
    </v-container>
  </div>
</template>

<script>
export default {
  name: "<%= importName %>",
};
</script>

<style lang="scss">
.<%= className %> {

}
</style>
