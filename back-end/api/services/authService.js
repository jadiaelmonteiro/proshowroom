const database = require('../models');
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');

class AuthService {
    async login(dto) {
        const user = await database.users.findOne({
            attributes: ['id', 'email', 'password'],
            where: {
                email: dto.email
            }
        });

        if (!user) {
            throw new Error('User not provider');
        }

        const matchPassword = await compare(dto.password, user.password)

        if (!matchPassword) {
            throw new Error("Match password invalid")
        }

        const accessToken = sign({
            id: user.id,
            email: user.email
        }, jsonSecret.secret, {
            expiresIn: 86400 //seconds
        });

        const data = {
            accessToken: accessToken,
            userId: user.id
        }

        return { data }
    }
}

module.exports = AuthService;