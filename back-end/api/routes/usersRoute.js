const { Router } = require('express');
const UserController = require('../controllers/userController');
const authenticate = require('../middieware/authenticate');
const router = Router();

router
    .post('/users', UserController.register);

router.use(authenticate)
    .get('/users', UserController.getAllUsers)
    .get('/users/id/:id')
    .put('/users/id/:id')
    .delete('/users/id/:id')

module.exports = router;