const scssLoaderAdditionalDataPaths = [
  "~@/assets/scss/variables",
  "~@/assets/scss/mixins",
];

/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  css: {
    sourceMap: process.env.NODE_ENV === "development",

    loaderOptions: {
      scss: {
        additionalData: scssLoaderAdditionalDataPaths
          .map((str) => `@import "${str}";`)
          .join("\n"),
      },
    },
  },

  devServer: {
    compress: true,
    hot: true,
    onBeforeSetupMiddleware: (devServer) => {
      devServer.app.use((request, response, next) => {
        response.header("Access-Control-Allow-Origin", "*");

        next();
      });
    },
  },
};
