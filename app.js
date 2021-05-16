const express = require("express");
const postRouter = require("./routes/post");
const app = express();

const PORT = 5000;

app.use("/post", postRouter);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`server running on port: http://localhost:${PORT}`);
});
