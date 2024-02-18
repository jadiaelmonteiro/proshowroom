const AnnouncementService = require('../services/announcementService');
const announcementService = new AnnouncementService();

class AnnouncementsController {
    static async register(req, res) {
        try {
            const announcement = await announcementService.register(req.body);
            res.status(201).send(announcement);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}

module.exports = AnnouncementsController;