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
    sourceMap: process.env.NODE_ENV === "development",
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
    config.devtool = process.env.NODE_ENV === "development" ? "source-map" : false;
  },
};

/** @type {import("webpack-dev-server").Configuration} */
module.exports.devServer = {
  host: process.env.HOST || "0.0.0.0",
  port: process.env.PORT || 8080,
  noInfo: true,
  before: (app) => {
    require("./devServer")(app);
  },
};
