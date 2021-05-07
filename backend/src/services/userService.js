import { User } from '../models/User'
import { error, todoAppError } from './statusDTOService'

export const userService = {
    findUserByUserId: async (id) => {
        console.log('USER_SERVICE ', await User.findUserById(id))
        if (await User.findUserById(id) === undefined) {
            throw todoAppError(error.BAD_REQUEST, `User with id ${id} is not exist`)
        }
        return await User.findUserById(id)
    }
}