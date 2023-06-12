const Comment = require("../models/comment");

const commentData = [
  {
    comment: "this is a test comment 1, post 1, user test",
    timestamp: "Posted on 1/11/2021 at 1:30",
    user_id: 2,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
