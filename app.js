const express = require("express");
const postRouter = require("./routes/post");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

const PORT = 5000;

app.use("/posts", postRouter);

mongoose.connect(
  process.env.MONGO_DB_URLS,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to DB");
  }
);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`server running on port: http://localhost:${PORT}`);
});
