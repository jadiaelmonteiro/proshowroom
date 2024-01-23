import { http } from './services';

const userService = {
    getAllUsers: () => {
        return http.get('users')
    },

    createUser: (data) => {
        return http.post('users', data);
    },

    login: (data) => {
        return http.post('auth/login', data)
    }
}

export default userService;