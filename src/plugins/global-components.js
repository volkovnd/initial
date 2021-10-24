import { kebabCase, pascalCase, prepareFileName } from "@/utils/string";

const context = require.context("@/components", true, /ui[\w-]+\.vue$/);

const components = context
  .keys()
  .map((fileName) => ({
    name: "UI" + pascalCase(prepareFileName(fileName).replace(/^ui-?/, "")),
    config: context(fileName).default,
    component: kebabCase(prepareFileName(fileName)),
  }))
  .reduce(
    (components, { name, component, config }) => ({
      [component]: {
        ...config,
        name,
      },

      ...components,
    }),
    {}
  );

const install = (Vue) => {
  for (const component in components) {
    Vue.component(component, components[component]);
  }
};

export const GlobalComponentsPlugin = {
  install,
};
