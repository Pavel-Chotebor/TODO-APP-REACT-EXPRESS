import { Todo } from '../models/Todo'
import { error, todoAppError } from './statusDTOService'
import { userService } from './userService'

export const todoService = {
    getAllTodos: async ({ userId }) => {
        await userService.findUserByUserId(userId)
        return await Todo.getAllTodos(userId)
    },
    getTodoById: async (id) => {
        const todo = Todo.getTodoByid(id)
        if (todo === undefined) {
            throw todoAppError(error.BAD_REQUEST, `Todo with id ${id} is not exist`)
        }
        return todo
    },
    addNewTodo: async ({ userId }, todo) => {
        if (!todo.title.length) {
            throw todoAppError(error.MISSING_INPUT, 'title')
        }
        else if (!todo.dueDate) {
            throw todoAppError(error.MISSING_INPUT, 'due date')
        }
        const todoToSave = {
            ...todo,
            isDone: 0,
            createdDate: new Date(),
            userId
        }
        const savedTodo = await Todo.save(todoToSave)
        return { ...todoToSave, id: savedTodo.insertId }
    },
    // editTodo: (todo) => {  
    //     console.log(todo)
    //     return Todo.updateTodoByIdWithColumnAndValue(todo.id, 'title', 'NEW_EDITED_TITLE')
    // },
    editTodo: async (todo) => {
        if (!todo.title.length) {
            throw todoAppError(error.MISSING_INPUT, 'title')
        }
        else if (!todo.dueDate) {
            throw todoAppError(error.MISSING_INPUT, 'due date')
        }
        console.log('REQ TODO: ', todo)
        const originalTodo = await todoService.getTodoById(todo.id)
        console.log('originalTodo TODO: ', originalTodo)
        const check = Object.keys(originalTodo).filter(key => todo[key] !== originalTodo[key])
        console.log(check)
        return Todo.updateTodoById(todo)
    },
    setTodoDone: async ({ id }) => {
        const originalTodo = await todoService.getTodoById(id)
        console.log('originlTodo', originalTodo)
        if (originalTodo.isDone) {
            throw todoAppError(error.BAD_REQUEST, 'todo is already done')
        }
        return await Todo.updateTodoByIdWithColumnAndValue(id, 'isDone', true)
    },
    deleteTodoById: async ({ id }) => {
        await todoService.getTodoById(id)
        // const todoToDelete = await todoService.getTodoById(id)
        // if (todoToDelete === undefined) {
        //     throw todoAppError(error.BAD_REQUEST, `Todo with id ${id} is not exist`)
        // }
        Todo.deleteTodoById(id)
        return 'todoToDelete'
    }
}
