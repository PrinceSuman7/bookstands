const express = require('express');
const route = express.Router();
const commentController = require('../controllers/comments_controller')

route.get('/comment/getLatestFiveByUser/:userId', commentController.getLatestFiveByUser); // Middleware
route.get('/comment/:bookId/:skipCount', commentController.getComments); // Middleware
route.post('/comment/add/:bookId', commentController.add); // Middleware
route.put('/comment/edit/:commentId', commentController.edit); // Middleware
route.delete('/comment/delete/:commentId', commentController.delete); // Middleware

module.exports = route;