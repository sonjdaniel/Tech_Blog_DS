const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'username_id',
});

Post.belongsTo(User, {
  foreignKey: 'username_id',
});

module.exports = { User, Post };