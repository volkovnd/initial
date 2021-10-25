const express = require("express");

module.exports = (app) => {
  app.use(express.json());

  if (process.env.CREATE_JSON_SERVER === true || process.env.CREATE_JSON_SERVER === "true") {
    const createJSONServer = require("@vue/cli-test-utils/createJSONServer.js");
    const db = require("./tests/fixtures");

    app.use("/api", createJSONServer(db));
  }
};
