const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./projectRoutes');
const commentRoutes = require("./comment-routes");

router.use('/users', userRoutes);
router.use('/projects', postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
