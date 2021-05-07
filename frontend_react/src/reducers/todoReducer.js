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
            return [...state].map(todo => todo.id === action.payload.id ? todo =action.payload : todo)
        }
        case todoActions.CHECK_TODO: {
            return [...state].filter(todo => todo.id !== action.payload)
        }
        case todoActions.SET_TODO_EDITED: {
            return [...state].map(todo => todo.id === action.payload ? { ...todo, isEdited: true } : todo)
        }
        case todoActions.SET_TODO_NOT_EDITED: {
            return [...state].map(todo => todo.id === action.payload ? { ...todo, isEdited: false } : todo)
        }
        default:
            return state;
    }
}

