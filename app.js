const express = require("express");
const todoRouter = require("./routes/todoRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend! 😘");
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/todos", todoRouter);

module.exports = app;
