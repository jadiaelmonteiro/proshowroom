const { Router } = require('express');
const multer = require('multer');
const UserController = require('../controllers/userController');
const authenticate = require('../middieware/authenticate');
const router = Router();
const storage = require('../config/multerConfig');
const upload = multer({ storage: storage });

router.post('/users', UserController.register);
router.use(authenticate)
    .get('/users', UserController.getAllUsers)
    .get('/users/:id', UserController.getUserById)
    .put('/users', UserController.updateUserById)
    .post('/users/upload', upload.single('file'), UserController.uploadFile)
    .delete('/users/id/:id')

module.exports = router;