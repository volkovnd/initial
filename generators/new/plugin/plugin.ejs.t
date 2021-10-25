---
to: "src/plugins/<%= h.changeCase.kebab(name) %>.js"
---<%
const importName = h.changeCase.pascal(name)
%><%

const install = (Vue) => {

};

export const <%= importName %>Plugin = {
  install,
};
