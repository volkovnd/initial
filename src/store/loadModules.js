import { kebabCase } from "@/utils/string";

export const loadModules = function () {
  const context = require.context("./modules", true, /\.js$/);

  const modules = context
    .keys()
    .map((key) => ({
      key,
      name: kebabCase(key.replace(/^\..*\//, "").replace(/\.[\w]+$/, "")),
    }))
    .reduce(
      (modules, { name, key }) => ({
        [name]: context(key).default,

        ...modules,
      }),
      {}
    );

  return { modules, context };
};
