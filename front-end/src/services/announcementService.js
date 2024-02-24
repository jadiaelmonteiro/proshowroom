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
    }
}

export default announcementService;