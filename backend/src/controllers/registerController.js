import { registerService } from '../services/registerService'

export const registerController = {
    register: async (req, res, next) => {

        console.log('REGISTER_BE ', req.body)
        try {
            await registerService.validateInput(req.body)
            const createdUser = await registerService.createUser(req.body)
            res.status(201).json(createdUser)
        } catch (error) {
            next(error)
        }
    }
}
