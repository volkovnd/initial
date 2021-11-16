import Vue from "vue";

import { kebabCase } from "@/utils/string";

const context = require.context("@/components", true, /v-[\w-]+\.(vue|js)$/);

const components = context
  .keys()
  .map((key) => ({
    name: kebabCase(key.replace(/^\..*\//, "").replace(/\.[\w]+$/, "")),
    options: context(key).default,
  }))
  .reduce(
    (components, { name, options }) => ({
      [name]: options,

      ...components,
    }),
    {}
  );

for (let name in components) {
  Vue.component(name, components[name]);
}
