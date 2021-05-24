import { error, todoAppError } from '../services/statusDTOService'
const jwt = require("jsonwebtoken");

export const verifyAccesToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401)
            .json(todoAppError(error.UNAUTHORIZED_REQUEST, 'Token is missing'))
    }
    const authHeader = req.headers.authorization
    let token = null;
    try {
        token = jwt.verify(authHeader.split(' ')[1], process.env.PRIVATE_KEY_VALUE)
    } catch (e) {
        return res.status(401).json({
            status: 'error',
            message: 'Token is not valid'
        }
        )
    }

    const emptyOrNotNumberValues = (Object.keys(token).filter(key => token[key] === '' || (/[a-zA-Z]/).test(token[key])))
    if (emptyOrNotNumberValues.length) {
        return res.status(401)
            .json({
                status: 'error',
                message: `Invalid taken value/s: ${emptyOrNotNumberValues}`
            }
            )
    }
    req.authToken = token
    console.log('AUTH TOKEN!!!!222  ', req.authToken = token)
    next();
}
