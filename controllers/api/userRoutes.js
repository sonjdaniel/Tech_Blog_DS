const router = require('express').Router();
const { User } = require('../../models');

// Route to create a new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    // Saving user information to be used in GET routes
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    // Passing User model validation message depending on error
    res.status(400).json(err.errors[0]);
  }
});