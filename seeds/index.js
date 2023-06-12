const sequelize = require("../config/connection");
// Requiring all seed data
const seedUser = require("./userSeedData");
const seedPost = require("./postSeedData");
const seedComment = require("./commentSeedData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedPost();
  await seedComment();
  // Terminate Node.js process with success
  process.exit(0);
};

seedAll();