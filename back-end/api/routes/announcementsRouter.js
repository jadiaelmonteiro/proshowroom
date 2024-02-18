const { Router } = require('express');
const multer = require('multer');
const AnnouncementController = require('../controllers/announcementController.js');
const router = Router();
const storage = require('../config/multerConfig');
const upload = multer({ storage: storage });

router.post('/announcement', AnnouncementController.register)

module.exports = router;