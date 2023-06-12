const { Post } = require("../models");

const postData = [
  {
    title: "Why MVC is so important",
    content:
      "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    username_id: 1,
    date_created: "6/11/2023",
  },
  {
    title: "Authentication vs Authorization",
    content:
      "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
    username_id: 1,
    date_created: "6/11/2023",
  },
  {
    title: "Object-Relational Mapping",
    content:
      "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
    username_id: 2,
    date_created: "6/11/2023",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;