const { defineConfig } = require("@vue/cli-service");

const scssLoaderAdditionalDataPaths = [
  "~@/assets/scss/variables",
  "~@/assets/scss/mixins",
];

/** @type {import("@vue/cli-service").ProjectOptions} */
module.exports = defineConfig({
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

  transpileDependencies: true,
});

/** @type {import("webpack-dev-server").Configuration} */
module.exports.devServer = {
  client: {
    overlay: {
      errors: true,
      warnings: true,
    },
  },

  onBeforeSetupMiddleware: (devServer) => {
    devServer.app.use((request, response, next) => {
      /** Stop problems with CORS*/
      response.header("Access-Control-Allow-Origin", "*");

      next();
    });
  },
};
