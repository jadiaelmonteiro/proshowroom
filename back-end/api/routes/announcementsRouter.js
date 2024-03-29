const { Router } = require('express');
const multer = require('multer');
const AnnouncementController = require('../controllers/announcementController.js');
const router = Router();
const storage = require('../config/multerConfig');
const upload = multer({ storage: storage });

router
    .get('/announcement', AnnouncementController.getAll)
    .get('/announcement/:id', AnnouncementController.getByUserId)
    .get('/announcement/dashboard/:id', AnnouncementController.dashboard)
    .post('/announcement', AnnouncementController.register)
    .post('/announcement/upload', upload.single('file'), AnnouncementController.uploadFile)
    .delete('/announcement/:id', AnnouncementController.delete)


module.exports = router;