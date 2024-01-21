const dataBase = require('../models');
const { hash } = require('bcryptjs');
const uuid = require('uuid');

class UserService {

    async register(dto) {
        const user = await dataBase.users.findOne({
            where: {
                email: dto.email
            }
        });
        if (user) {
            throw new Error('User already exists');
        }

        try {
            const passwordHash = await hash(dto.password, 8)
            const newUser = await dataBase.users.create({
                id: uuid.v4(),
                firstName: dto.firstName,
                lastName: dto.lastName,
                email: dto.email,
                password: passwordHash
            })

            return newUser;

        } catch (error) {
            throw new Error('Erro when registering user');
        }
    }

    async getAllUsers() {
        try {
            const users = await dataBase.users.findAll();
            return users;
        } catch (error) {
            throw new Error('Erro when registering user');
        }
    }
}

module.exports = UserService;