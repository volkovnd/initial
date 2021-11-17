const express = require("express");
const createJSONServer = require("@vue/cli-test-utils/createJSONServer");
const logger = require("@vue/cli-shared-utils/lib/logger");

module.exports = (app) => {
  app.use(express.json());

  app.use("/api", createJSONServer("db.json"));
};
