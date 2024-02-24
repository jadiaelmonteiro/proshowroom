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
    }
}

export default announcementService;