const router = require('express').Router();
// imports our user, post, and comment routes from the api folder
const userRoutes = require('./user-routers.js');
const postRoutes = require('./post-routers.js');
const commentRoutes = require('./comment-routers.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;