export const loadRoutes = () => {
  const context = require.context("./routes", true, /\.js$/);

  const routes = context.keys().reduce((routes, fileName) => {
    const route = context(fileName).default;

    return [...routes, route];
  }, []);

  return routes;
};
