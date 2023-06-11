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