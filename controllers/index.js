// Importing Timestamp Function
const authController = require('./auth.controller');
const errorController = require('./error.controller');
const postController = require('./post.controller');
const sectionController = require('./section.controller');
const commentController = require('./comment.controller');

module.exports = {
  authController,
  errorController,
  postController,
  sectionController,
	commentController
};