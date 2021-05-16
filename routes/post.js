const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Post");
});

router.get("/my1", (req, res) => {
  res.send("First Post");
});

module.exports = router;
