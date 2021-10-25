const express = require("express");

module.exports = (app) => {
  app.use(express.json());

  require("./createJSONServer")(app);
};
