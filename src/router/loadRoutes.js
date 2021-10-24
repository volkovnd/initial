import { pascalCase, prepareFileName } from "@/utils/string";

export const loadRoutes = () => {
  const context = require.context("./routes", true, /\.js$/);

  const routes = context.keys().reduce((routes, fileName) => {
    const route = context(fileName).default;

    if (!route.name) {
      let name = pascalCase(prepareFileName(fileName));

      route.name = name;
    }

    return [...routes, route];
  }, []);

  return routes;
};
