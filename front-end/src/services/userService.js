import { http } from './services.js';

const userService = {
    getAllUsers: () => {
        return http.get('users')
    },

    createUser: (data) => {
        return http.post('users', data);
    }
}

export default userService;