---
to: "src/plugins/<%= h.changeCase.kebab(name) %>.js"
---<%
const importName = h.changeCase.pascal(name)
%><%

const install = function(Vue, options) {

};

export const <%= importName %>Plugin = {
  install,
};
