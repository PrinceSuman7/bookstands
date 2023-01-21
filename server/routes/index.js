const express = require('express');
const route = express.Router();
const errorController = require('../controllers/errors_controller');

route.use('/book', require('../routes/book'));
route.use('/user', require('../routes/user'));
route.use('/comment', require('../routes/comment'));
route.use('/cart', require('../routes/cart'));

module.exports = route;