const { User } = require("../models");

const userData = [
  {
    username: "Wentworth",
    password: "wentworth123",
  },
];

const seedUser = async () =>
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;