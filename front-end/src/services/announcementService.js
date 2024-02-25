import { http } from './services';

const announcementService = {
    create: (data) => {
        return http.post('announcement', data);
    },

    updateFile: (data) => {
        return http.updatedFile('announcement/upload', data);
    },

    getAll: () => {
        return http.get('public/announcement', {});
    },

    getDataDashboard: (data) => {
        return http.getById(`announcement/dashboard/${data.userId}`, data);
    },

    getByUserId: (data) => {
        return http.getById(`announcement/${data.userId}`, data);
    },

    deleteById: (data) => {
        return http.deleteById(`announcement/${data.id}`, data);
    }
}

export default announcementService;