const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

// Route to show all posts on homepage
router.get("/", async (req, res) => {
  try {
    const postsData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = postsData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      // This will determine if Login or Logout will show on page
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to show user's dashboard which includes their posts / This is only available if user is logged in (verified by withAuth)
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userPosts = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const posts = userPosts.get({ plain: true });
    res.render("dashboard", {
      ...posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to render newPost page / This is only available if user is logged in (verified by withAuth)
router.get("/new-post", withAuth, (req, res) =>
  res.render("newPost", { loggedIn: req.session.loggedIn })
);

// Route to render page that allows user to update their own posts (one at a time) / This is only available if user is logged in (verified by withAuth)
router.get("/update/post/:id", withAuth, async (req, res) => {
  try {
    const onePostData = await Post.findByPk(req.params.id);
    if (!onePostData) {
      res.status(404).json({ message: "No posts found with that ID" });
      return;
    }
    const userPost = onePostData.get({ plain: true });
    if (userPost.username_id == req.session.user_id) {
      res.render("updatePost", {
        ...userPost,
        loggedIn: req.session.loggedIn,
      });
    } else {
      res
        .status(401)
        .json({ message: "You are not authorized to edit this post." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// Route to render page that allows user to add a comment to a post / This is only available if user is logged in (verified by withAuth)
router.get("/add-comment/post/:id", withAuth, async (req, res) => {
  try {
    const onePostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    if (!onePostData) {
      res.status(404).json({ message: "No posts found with that ID" });
      return;
    } else {
      const userPost = onePostData.get({ plain: true });
      console.log(userPost);
      res.render("comments", {
        ...userPost,
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to render page that shows all comments for a singular post / This is only available if user is logged in (verified by withAuth)
router.get("/comment/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });
    if (!commentData) {
      res.status(404).json({ message: "No posts found with that ID" });
      return;
    } else {
      const commentPost = commentData.get({ plain: true });
      console.log(commentPost);
      res.render("showComment", {
        ...commentPost,
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

// Route to render signup page if user is not yet logged in, if they are logged in, they are redirected to the homepage
router.get("/signup", (req, res) =>
  req.session.loggedIn ? res.redirect("/") : res.render("signup")
);

// Route to render login page if user is not yet logged in, if they are logged in, they are redirected to the homepage
router.get("/login", (req, res) =>
  req.session.loggedIn ? res.redirect("/") : res.render("login")
);

module.exports = router;