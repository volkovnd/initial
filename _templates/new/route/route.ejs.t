---
to: "src/router/routes/<%= h.changeCase.kebab(name) %>.js"
---
export default {
  path: "<%= path %>",
  name: "<%= h.changeCase.pascal(name) %>",
  component: () => import(/* webpackChunkName: "<%= h.changeCase.kebab(name) %>" */ "@/components/<%= h.changeCase.kebab(name) %>.vue"),<% if (hasProps) {
  %>
  props: true,<% }
  %>
};
