---
to: "src/utils/<%= h.changeCase.kebab(name) %>.js"
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.camel(fileName)
%>export const <%= importName %> = () => {
  return "hello";
};
