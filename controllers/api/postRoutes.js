const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to create a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      // Deconstructuring req.body to add user_id
      ...req.body,
      username_id: req.session.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// Route to update post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatePost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatePost) {
      res.status(404).json({ message: "No post found with that ID" });
      return;
    }
    res.status(200).json("Post has been updated");
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to delete a post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletePost) {
      res.status(404).json({ message: "No post found with that ID" });
      return;
    }
    res.status(200).json("Post has been deleted");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;