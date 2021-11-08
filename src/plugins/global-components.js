import { pascalCase } from "@/utils/string";

const context = require.context("@/components", true, /v-[\w-]+\.(vue|js)$/);

const components = context
  .keys()
  .map((key) => ({
    key,
    name: pascalCase(key.replace(/^\..*\//, "").replace(/\.[\w]+$/, "")),
  }))
  .reduce(
    (components, { key, name }) => ({
      [name]: context(key).default,

      ...components,
    }),
    {}
  );

export default function (Vue) {
  for (const component in components) {
    Vue.component(component, components[component]);
  }
}
