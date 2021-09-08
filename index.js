const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./src/router/user");
mongoose
  .connect("mongodb+srv://himanshubhatt:1234@cluster0.aqoej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Database Not connected");
  });
app.use(express.json())
app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is running at 3000 port");
});
