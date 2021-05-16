const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: Number,
});

module.exports = mongoose.model("Posts", PostSchema);
