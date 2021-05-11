import { db } from '../data/connection'

export const Todo = {
    save: async todo => {
        const { results } = await db.query('INSERT INTO todos SET ?', todo)
        return results
    },
    getTodoByid: async (todoId) => {
        const { results } = await db.query('SELECT * FROM todos WHERE id=? ', todoId)
        return results[0]
    },
    getAllTodos: async (userId) => {
        const { results } = await db.query('SELECT * FROM todos WHERE userId=?', userId)
        return results 
    },
    updateTodoByIdWithColumnAndValue: async (todoId, column, value) => {   
        const { results } = await db.query(`UPDATE todos SET ${column}=? WHERE id=?`, [value, todoId])
        return results 
    },
    updateTodoById: async (todo) => {
        const { results } = await db.query(`UPDATE todos SET title=?, description=?, dueDate=? WHERE id=?`,
        [todo.title, todo. description,todo.dueDate, todo.id])
        return results 
    },
    deleteTodoById: async (todoId) => {
        const { results } = await db.query('DELETE  FROM todos WHERE id=?', todoId)
        return results[0] 
    }
}
