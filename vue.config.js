const globalStylesImports = [
  "~bootstrap/scss/_functions.scss",
  "~bootstrap/scss/_variables.scss",
  "~@/scss/vendor/bootstrap/_custom.scss",
  "~bootstrap/scss/_mixins.scss",
].map((path) => `@import "${path}"`);

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
    config.mode(process.env.NODE_ENV === "production" ? "production" : "development");

    config.performance.hints(config.mode === "production" ? "warning" : false);

    const oldSvg = config.module.rule("svg").uses.get("file-loader");

    config.module
      .rule("svg")
      .uses.clear()
      .end()
      .oneOf("vue-svg-loader")
      .resourceQuery(/component/)
      .use("babel-loader")
      .loader(require.resolve("babel-loader"))
      .end()
      .use("vue-svg-loader")
      .loader(require.resolve("vue-svg-loader"))
      .end()
      .end()
      .oneOf("file-loader")
      .uses.set("file-loader", oldSvg);

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
