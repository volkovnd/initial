const globalStylesImports = ["~@/styles/_variables.scss"];

/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  css: {
    sourceMap: process.env.NODE_ENV !== "production",

    loaderOptions: {
      sass: {
        additionalData: globalStylesImports.map((p) => `@import "${p}"`).join("\n"),
      },
      scss: {
        additionalData: [...globalStylesImports.map((p) => `@import "${p}"`), ""].join(";\n"),
      },
    },
  },

  chainWebpack: (config) => {
    config.mode = "development";

    config.performance.hints(config.mode === "production" ? "warning" : false);
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
