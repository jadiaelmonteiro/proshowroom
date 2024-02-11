const dataBase = require('../models');
const { hash } = require('bcryptjs');
const { compare } = require('bcryptjs');
const uuid = require('uuid');

class UserService {

    async register(dto) {
        if (dto.firstName == "" || dto.email == "" || dto.password == "") {
            throw new Error('Empty data');
        }

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

    async getUserById(id) {
        const user = await dataBase.users.findOne({
            where: {
                id: id
            }
        });

        if (!user) {
            throw new Error('User not provider!')
        }

        return user;
    }

    async updateUserById(dto) {
        let data = {};

        data = {
            firstName: dto.firstName,
            lastName: dto.lastName,
            email: dto.email,
            address: dto.address,
            country: dto.country,
            city: dto.city,
            state: dto.state,
            code: dto.code,
        };

        if (dto.changePassword) {
            const canChangePassword = await this.checkPassword(dto);

            if (!canChangePassword) {
                throw new Error('Erro when update password not match');
            }

            if (dto.passwordNew == "") {
                throw new Error('Erro when update password is empty');
            }

            const passwordHash = await hash(dto.passwordNew, 8);

            data = {
                ...data,
                password: passwordHash
            };
        }

        const user = await dataBase.users.update(data, {
            where: {
                id: dto.id
            }
        });

        if (!user) {
            throw new Error('Erro when updated user');
        }

        return await this.getUserById(dto.id);
    }

    async checkPassword(dto) {
        const user = await dataBase.users.findOne({
            attributes: ['password'],
            where: {
                id: dto.id
            }
        });

        const matchPassword = await compare(dto.passwordOld, user.password)

        if (!matchPassword) {
            return false;
        }

        return true;
    }

    async uploadFile(dto) {

        if (!dto.filePath) {
            throw new Error('Empty file');
        }

        const updateFile = await dataBase.users.update({
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

module.exports = UserService;