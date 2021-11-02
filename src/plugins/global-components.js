import { pascalCase, prepareFileName } from "@/utils/string";
import { registerComponents } from "@/utils/components";

const loadComponents = (context) => {
  return context
    .keys()
    .map((key) => ({
      key,
      name: pascalCase(prepareFileName(key, true)),
    }))
    .reduce(
      (components, { key, name }) => ({
        [name]: context(key).default,

        ...components,
      }),
      {}
    );
};

const components = loadComponents(require.context("@/components", true, /v-[\w-]+\.vue$/));

const install = function (Vue) {
  registerComponents(Vue, components);
};

export const GlobalComponentsPlugin = {
  install,
};
