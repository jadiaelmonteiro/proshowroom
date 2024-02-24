const { Router } = require('express');
const AnnouncementController = require('../controllers/announcementController.js');
const router = Router();

router
    .get('/public/announcement', AnnouncementController.getAll)

module.exports = router;