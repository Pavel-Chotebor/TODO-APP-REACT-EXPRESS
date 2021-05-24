import { todoService } from '../services/todoService'
export const todoController = {
    getAllTodos: async (req, res, next) => {
        try {
            return res.status(200).json(await todoService.getAllTodos(req.authToken))
        }
        catch (err) {
            next(err)
        }
    },
    getTodo: async (req, res) => {
        const todo = await todoService.getTodoById(req.body)
        return res.status(200).json(todo)
    },
    addNewTodo: async (req, res, next) => {
        try {
            res.status(201).json(await todoService.addNewTodo(req.authToken, req.body))
        }
        catch (err) {
            next(err)
        }
    },
    editTodo: async (req, res, next) => {
        try {
            res.status(200).json(await todoService.editTodo(req.body))
        }
        catch (err) {
            next(err)
        }
    },
    setTodoDone: async (req, res, next) => {
        try {
            res.status(200).json(await todoService.setTodoDone(req.body))
        }
        catch (err) {
            next(err)
        }
    },
    deleteTodo: async (req, res, next) => {
        try {
            res.status(200).json(await todoService.deleteTodoById(req.body))
        }
        catch (err) {
            next(err)
        }
    },
}