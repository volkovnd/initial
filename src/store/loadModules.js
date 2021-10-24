import { kebabCase, prepareFileName } from "@/utils/string";

export const loadModules = function () {
  const context = require.context("./modules", true, /\.js$/);

  const modules = context
    .keys()
    .map((fileName) => ({
      name: kebabCase(prepareFileName(fileName)),
      module: context(fileName).default,
    }))
    .reduce(
      (modules, { name, module }) => ({
        [name]: module,

        ...modules,
      }),
      {}
    );

  return { modules, context };
};
