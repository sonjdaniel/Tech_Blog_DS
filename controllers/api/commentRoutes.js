const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Route to create a new comment
router.post("/", withAuth, async (req, res) => {
    try {
      const commentData = await Comment.create({
        // Deconstructuring req.body to add user_id
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;