const dataBase = require('../models');
const uuid = require('uuid');

class AnnouncementsService {
    async register(dto) {
        if (dto.title == "" || dto.description == "" || dto.categorie == "" || dto.value == "") {
            throw new Error('Empty data');
        }

        try {
            const newAnnouncement = await dataBase.announcements.create({
                id: uuid.v4(),
                title: dto.title,
                description: dto.description,
                categorie: dto.categorie,
                value: dto.value,
                state: dto.state,
                userId: dto.userId
            });

            return newAnnouncement;
        } catch (error) {
            throw new Error('Erro when registering Announcements');
        }
    }
}
module.exports = AnnouncementsService;