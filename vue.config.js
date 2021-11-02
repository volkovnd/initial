const globalStylesImports = ["~@/styles/_variables.scss", "~@/styles/_mixins.scss"].map((p) => `@import "${p}"`);

/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  css: {
    sourceMap: process.env.NODE_ENV !== "production",

    loaderOptions: {
      sass: {
        additionalData: globalStylesImports.join("\n"),
      },
      scss: {
        additionalData: [...globalStylesImports, ""].join(";\n"),
      },
    },
  },

  chainWebpack: (config) => {
    config.mode(process.env.NODE_ENV ? process.env.NODE_ENV : "development");

    config.performance.hints(config.mode === "production" ? "warning" : false);

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        const transformAssetUrls = options.transformAssetUrls || {};
        return {
          ...options,
          transformAssetUrls: {
            video: ["src", "poster"],
            source: "src",
            img: "src",
            image: "xlink:href",
            use: "href",
            ...transformAssetUrls,
            "v-img": "src",
            VImg: "src",
          },
        };
      });
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
