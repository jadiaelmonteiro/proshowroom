import { http } from './services';

const userService = {
    getAllUsers: () => {
        return http.get('users')
    },

    createUser: (data) => {
        return http.post('users', data);
    },

    login: (data) => {
        return http.post('auth/login', data);
    },

    checkAuth: (data) => {
        return http.get('auth/check', data);
    },

    getUserById: (data) => {
        return http.getById(`users/${data.id}`, data);
    },

    updatedUserById: (data) => {
        return http.updatedById('users', data);
    },

    updateFile: (data) => {
        return http.updatedFile('users/upload', data);
    }
}

export default userService;