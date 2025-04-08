const Todo = require("../models/Todo");

// const checkID = (req, res, next, val) => {
//   if (req.params.id * 1 > todos.length) {
//     return res.status(404).json({ status: "failed", message: "invalid ID" });
//   }
//   next();
// };

exports.getAllTodos = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 100;
  const skip = (page - 1) * limit;
  const todos = await Todo.find().skip(skip).limit(limit);

  res.status(200).json({
    status: "success",
    result: todos.length,
    data: {
      todos,
    },
  });
};

exports.addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!todo) {
      return res.status(400).json({
        status: "fail",
        message: "Todo not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({
        status: "fail",
        message: "Todo not found",
      });
    }

    res.status(204).end();
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
