import { todoActions } from '../actions/todoActions'

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case todoActions.UPDATE_TODOS: {
            return action.payload
        }
        case todoActions.ADD_TODO: {
            return [...state, action.payload]
        }
        case todoActions.UPDATE_TODO: {
            return [...state].map(todo => todo.id === action.payload.id ? todo = action.payload : todo)
        }
        case todoActions.DELETE_TODO: {
            return [...state].filter(todo => todo.id !== action.payload)
        }
        default:
            return state
    }
}

