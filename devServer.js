const express = require("express");

function createJSONServer(data) {
  const jsonServer = require("json-server");

  const server = jsonServer.create();
  const router = jsonServer.router(data);
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  return server;
}

module.exports = (app) => {
  app.use(express.json());

  app.use("/api", createJSONServer("db.json"));
};
