const createJSONServer = require("@vue/cli-test-utils/createJSONServer.js");
const db = require("./tests/fixtures");

module.exports = (app) => {
  app.use("/api", createJSONServer(db));
};

