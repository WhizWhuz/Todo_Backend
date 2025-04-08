const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.port || 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/todoApp")
  .then(() => {
    console.log("Connected to MongoDB! 🥷");
    app.listen(PORT, () => {
      console.log(`Server listens to ${PORT}`);
    });
  })
  .catch((err) => console.error("⛔ MongoDB Connection Error.", err.message));
