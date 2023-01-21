const express = require('express');
const route = express.Router();
const userController = require('../controllers/users_controller');

route.post('register', userController.register); // middleware to add
route.post('/login', userController.login); // middleware to add
route.get('/profile/:username', userController.getProfile); // middleware to add
route.get('/purchaseHistory', userController.getPurchaseHistory); // middleware to add
route.get('/changeAvatar', userController.changeAvatar); // middleware to add
route.post('/blockComments/:userId', userController.blockComments); // middleware to add
route.post('/unblockComments/:userId', userController.unblockComments); // middleware to add

module.exports = route;