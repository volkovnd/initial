import { pascalCase, prepareFileName } from "@/utils/string";
import { registerComponents } from "@/utils/components";

const context = require.context("@/components", true, /v-[\w-]+\.vue$/);

export const components = context
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
  registerComponents(Vue, components);
};

export const GlobalComponentsPlugin = {
  install,
};
