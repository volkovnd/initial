const express = require("express");
const jsonServer = require("json-server");

module.exports = (app) => {
  app.use(express.json());

  const server = jsonServer.create();
  const router = jsonServer.router("db.json");
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  app.use("/api", server);
};
