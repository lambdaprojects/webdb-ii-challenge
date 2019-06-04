const express = require("express");
const zooRouter = require("./data/routers/zooRouter.js");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h2>Ready, set go! for WEB DB 2 CHALLENGE - ZOO!!</h2>`);
});

server.use("/api/zoos", zooRouter);
//server.use("/api/actions", actionRouter);

module.exports = server;
