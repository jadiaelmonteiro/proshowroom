const dataBase = require('../models');
const uuid = require('uuid');

class AnnouncementsService {

    async getAll() {
        try {
            const announcements = await dataBase.announcements.findAll({ include: dataBase.users });
            return announcements;
        } catch (error) {
            throw new Error('Error when get announcements');
        }
    }

    async register(dto) {
        if (!dto) {
            throw new Error('Empty data');
        }

        if (dto.title == "" || dto.description == "" || dto.categorie == "" || dto.value == "") {
            throw new Error('Empty data required');
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

    async uploadFile(dto) {

        if (!dto.filePath) {
            throw new Error('Empty file');
        }

        const updateFile = await dataBase.announcements.update({
            filePath: dto.filePath
        }, {
            where: {
                id: dto.id
            }
        });

        if (!updateFile) {
            throw new Error('Erro when updated file path');
        }

        return updateFile ? true : false;
    }
}
module.exports = AnnouncementsService;