import { User } from '../models';
import { todoAppError, error } from './statusDTOService'

const bcrypt = require('bcryptjs');
const saltRounds = 10;

export const registerService = {
    validateInput: async ({ username, password }) => {
        if ((username == undefined || username.length == 0) && (password == undefined || password.length == 0)) {
            console.log('validation')
            throw todoAppError(error.MISSING_INPUT, 'username and password')
        }
        if (password == undefined || password.length == 0) {
            throw todoAppError(error.MISSING_INPUT, 'password')
        }
        if (username == undefined || username.length == 0) {
            throw todoAppError(error.MISSING_INPUT, 'username')
        }
        if (await User.findUserByUsername(username)) {
            throw todoAppError(error.USERNAME_ALREADY_TAKEN)
        }
        if (password.length < 8) {
            throw todoAppError(error.FIELD_LENGTH_ERROR, 'password is 8')
        }
    },
    createUser: async user => {
        const hashPassword = bcrypt.hashSync(user.password, saltRounds)
        const userToBeSaved = {
            username: user.username,
            password: hashPassword,
        };
        const savedUser = await User.save(userToBeSaved)
        return {
            id: savedUser.insertId,
            username: userToBeSaved.username,
        }
    },
}
