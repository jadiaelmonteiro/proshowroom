const { Router } = require('express');
const AuthController = require('../controllers/authController');
const authenticate = require('../middieware/authenticate');

const router = Router();

router.post('/auth/login', AuthController.login);
router.use(authenticate).get('/auth/check', AuthController.check);

module.exports = router;