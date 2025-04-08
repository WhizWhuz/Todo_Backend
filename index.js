// const express = require("express");
// const mongoose = require("mongoose");
// const todoRouter = require("./routes/todoRoutes");

// const app = express();
// const PORT = process.env.port || 3000;

// app.use(express.json());

// mongoose
//   .connect("mongodb://127.0.0.1:27017/todoApp")
//   .then(() => console.log("Connected to MongoDB! 🥷"))
//   .catch((err) => console.error("⛔ MongoDB Connection Error.", err));

// app.get("/", (req, res) => {
//   res.send("Hello from the backend! 😘");
// });

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

// // app.use(express.static(`${__dirname}/public`));

// app.use("/api/v1/todos", todoRouter);

// app.listen(PORT, () => {
//   console.log(`Server listens to ${PORT}`);
// });
