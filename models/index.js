const User = require('./User');
const Post = require('./Post');
const Comment = require('./comment')

User.hasMany(Post, {
  foreignKey: 'username_id',
});

Post.belongsTo(User, {
  foreignKey: 'username_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});



module.exports = { User, Post, Comment };