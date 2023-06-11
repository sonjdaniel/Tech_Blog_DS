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
// Route to allow user to log in
router.post("/login", async (req, res) => {
  try {
    // Check if username exists in db
    userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    // If username does not exist, sends error message
    if (!userData) {
      res.status(400).json({ message: "Incorrect Username" });
      return;
    }
    // Using verifyPassword function in User model to see if password is correct
    const correctPassword = await userData.verifyPassword(req.body.password);
    // If password is incorrect, sends error message
    if (!correctPassword) {
      res.status(400).json({ message: "Incorrect Password" });
      return;
    }
    // If username exists in db and password is correct, registers req.session.loggedIn as TRUE and sends success message
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      res.json({ user: userData, message: "Logged In" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route to allow user to end session / log out
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;