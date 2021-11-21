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

  chainWebpack: (config) => {
    /**
     * Disable webpack perfomance errors while developing
     */
    config.performance.hints(
      process.env.NODE_ENV === "production" && "warning"
    );
  },

  devServer: {
    client: {
      /**
       * Enable special webpack-dev-server wrapper
       * for displaying warnings and errors on client
       */
      overlay: {
        errors: true,
        warnings: true,
      },
    },

    onBeforeSetupMiddleware: (devServer) => {
      devServer.app.use((request, response, next) => {
        /**
         * Stop problems with CORS
         */
        response.header("Access-Control-Allow-Origin", "*");

        next();
      });
    },
  },
};
