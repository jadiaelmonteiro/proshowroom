import { http } from './services';

const announcementService = {
    create: (data) => {
        return http.post('announcement', data);
    },

    updateFile: (data) => {
        return http.updatedFile('announcement/upload', data);
    }
}

export default announcementService;