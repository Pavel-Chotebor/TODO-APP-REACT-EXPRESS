import { User } from '../models/User';
import { generateToken } from './tokenService'  // replace with authMiddleware
import { todoAppError, error } from './statusDTOService';

const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

export const loginService = {
  authorizeUser: async ({ username, password }) => {
    if (!username && !password) {
      throw tribesError(error.MISSING_INPUT, 'username and password')
    } else if (!username) {
      throw tribesError(error.MISSING_INPUT, 'username')
    } else if (!password) {
      throw tribesError(error.MISSING_INPUT, 'password')
    }
    const userResponse = await loginService.returnUserResponseFromDB(username, password)
    return await loginService.generateUserToken(userResponse)
  },
  returnUserResponseFromDB: async (username, password) => {
    let isPasswordValid = false
    const responseFromDatabase = await User.findUserByUsername(username)
    let usersPasswordFromDB = ''

    if (responseFromDatabase) {
      usersPasswordFromDB = responseFromDatabase.password
      isPasswordValid = bcrypt.compareSync(password, usersPasswordFromDB)
    }
    if (isPasswordValid) {
      return responseFromDatabase
    } throw todoAppError(error.UNAUTHORIZED_REQUEST, 'Username or password is incorrect.')
  },
  generateUserToken: async (user) => {
    const token = jwt.sign({
      userId: user.id,
    },
      process.env.PRIVATE_KEY_VALUE,
      { expiresIn: process.env.TOKEN_EXPIRE })
    return generateToken(token)
  },
}
