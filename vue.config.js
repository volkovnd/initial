const globalStylesImports = [
  '@import "~bootstrap/scss/_functions.scss"',
  '@import "~@/scss/vendor/bootstrap/_custom.scss"',
  '@import "~bootstrap/scss/_variables.scss"',
  '@import "~bootstrap/scss/_mixins.scss"',
];

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
  transportMode: "ws",
  before: (app) => {
    require("./devServer")(app);
  },
};
