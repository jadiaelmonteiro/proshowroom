const UserService = require('../services/userService');
const userService = new UserService();

class UserController {
    static async register(req, res) {
        const { firstName, lastName, email, password } = req.body;

        try {
            const user = await userService.register({
                firstName, lastName, email, password
            });

            res.status(201).send(user);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await userService.getUserById(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async updateUserById(req, res) {
        try {
            const user = await userService.updateUserById(req.body);
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}

module.exports = UserController;