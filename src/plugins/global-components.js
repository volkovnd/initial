import { pascalCase, prepareFileName } from "@/utils/string";

const context = require.context("@/components", true, /v-[\w-]+\.vue$/);

const components = context
  .keys()
  .map((fileName) => ({
    name: pascalCase(prepareFileName(fileName)),
    config: context(fileName).default,
  }))
  .reduce(
    (components, { name, config }) => ({
      [name]: {
        ...config,
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
