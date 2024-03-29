const AnnouncementService = require('../services/announcementService');
const announcementService = new AnnouncementService();

class AnnouncementsController {

    static async getAll(req, res) {
        try {
            const announcements = await announcementService.getAll();
            res.status(200).send(announcements);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getByUserId(req, res) {
        try {
            const { id } = req.params;
            const announcements = await announcementService.getByUserId(id);
            res.status(200).send(announcements);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const announcementDeleted = await announcementService.delete(id);
            res.status(200).send(announcementDeleted);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async dashboard(req, res) {
        try {
            const { id } = req.params;
            const indicators = await announcementService.dashboard(id);
            res.status(200).send(indicators);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async register(req, res) {
        try {
            const announcement = await announcementService.register(req.body);
            res.status(201).send(announcement);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async uploadFile(req, res) {
        try {
            const pathOriginal = req.file.path;
            const pathConvert = pathOriginal.replace(/\\/g, '/');
            const filePath = pathConvert;
            const id = req.body.id;
            const sendUploadFile = await announcementService.uploadFile({
                filePath: filePath,
                id: id
            });
            return res.status(200).json({ message: sendUploadFile });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = AnnouncementsController;