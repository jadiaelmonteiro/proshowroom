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

    async getByUserId(id) {
        try {
            const announcements = await dataBase.announcements.findAll({
                where: {
                    userId: id
                }
            });
            return announcements;
        } catch (error) {
            throw new Error('Error when get announcements');
        }
    }

    async delete(id) {
        try {
            const announcementDeleted = await dataBase.announcements.destroy({
                where: {
                    id: id
                }
            });
            return { deletedAnnouncement: announcementDeleted == 1 ? true : false };
        } catch (error) {
            throw new Error('Error when delete announcements');
        }
    }

    async dashboard(id) {
        try {
            const dashboardData = await dataBase.announcements.findOne({
                where: {
                    userId: id
                },
                attributes: [
                    [dataBase.announcements.sequelize.fn('COUNT', dataBase.announcements.sequelize.col('id')), 'n_announcements'],
                    [dataBase.announcements.sequelize.fn('SUM', dataBase.announcements.sequelize.col('value')), 'n_values'],
                ],
                raw: true,
            });

            const totalAnnouncements = dashboardData ? dashboardData.n_announcements : 0;
            const totalAnnouncementsSum = dashboardData ? dashboardData.n_values : 0;

            return {
                totalAnnouncements: totalAnnouncements ?? 0,
                totalAnnouncementsValue: totalAnnouncementsSum ?? 0
            };
        } catch (error) {
            throw new Error("Error in get data of dashboards");
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