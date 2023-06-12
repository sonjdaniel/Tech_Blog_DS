const User = require("../models/user");

const userData = [
  {
    username: "wentworth",
    email: "wentworth@email.com",
    password: "aaaaaa",
  },
  {
    username: "test",
    email: "test@email.com",
    password: "123456789",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
