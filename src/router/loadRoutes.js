const context = require.context("./routes", true, /\.js$/);

const routes = context.keys().map((key) => context(key).default);

export default routes;
