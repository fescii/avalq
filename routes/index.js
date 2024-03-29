// Importing all routes
const auth = require('./auth.route');
const post = require('./post.route');
const section = require('./section.route');
const comment = require('./comment.route');

module.exports = app => {
  auth(app);
  post(app);
  section(app);
  comment(app);
}