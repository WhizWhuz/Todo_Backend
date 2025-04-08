const express = require("express");

const router = express.Router();

const todoControllers = require("../controllers/todoControllers");

router
  .route("/")
  .get(todoControllers.getAllTodos)
  .post(todoControllers.addTodo);

router
  .route("/:id")
  .patch(todoControllers.updateTodo)
  .delete(todoControllers.deleteTodo);

module.exports = router;
