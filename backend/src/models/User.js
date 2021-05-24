import { db } from '../data/connection'

export const User = {
    save: async user => {
        const { results } = await db.query('INSERT INTO users SET ?', user)
        return results
    },
    findUserByUsername: async (username) => {
        const { results } = await db.query('SELECT * FROM users WHERE username=? ', username)
        return results[0]
    },
    findUserById: async (id) => {
        console.log('IN MODEL ')
        const { results } = await db.query('SELECT * FROM users WHERE id=? ', id)
        console.log('IN MODEL22 ')
        return results[0]
    }
}