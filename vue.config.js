/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  css: {
    sourceMap: process.env.NODE_ENV !== "production",
  },

  chainWebpack: (config) => {
    config.mode = "development";
  },

  configureWebpack: (config) => {
    config.devtool = config.mode === "development" ? "source-map" : false;
  },
};

/** @type {import("webpack-dev-server").Configuration} */
module.exports.devServer = {
  host: process.env.HOST || "0.0.0.0",
  port: process.env.PORT || 8080,
  useLocalIp: true,
  open: true,
  compress: true,
  transportMode: {
    client: "ws",
    server: "ws",
  },
  clientLogLevel: "none",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  hot: true,
  noInfo: true,

  before: (app) => {
    require("./devServer")(app);
  },
};
