const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

// get single post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

// insert into DB
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    likes: req.body.likes,
  });

  try {
    const data = await post.save();
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete post

router.delete("/:postId", async (req, res) => {
  try {
    const post = await Post.deleteOne({ _id: req.params.postId });
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

// update post
router.patch("/:postId", async (req, res) => {
  try {
    const post = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          body: req.body.body,
          likes: req.body.likes,
        },
      }
    );
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
