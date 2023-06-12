const { Comment } = require("../models");

const commentData = [
  {
    content: "I agree!",
    date_created: "6/11/2023",
    user_id: 1,
    post_id: 3,
  },
  {
    content: "This seems correct!",
    date_created: "6/11/2023",
    user_id: 2,
    post_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;