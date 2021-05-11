import { todoFormActions } from '../actions/todoFormActions'

const todoValues = {
    title: {
        isValid: false,
        value: '',
    },
    description: {
        isValid: true,
        value: ''
    },
    dueDate: {
        isValid: false,
        value: ''
    },
}

export const todoFormReducer = (state = { ...todoValues }, action) => {
    switch (action.type) {
        case todoFormActions.SET_TITLE: {
            return { ...state, title: { isValid: action.payload.isValid, value: action.payload.value } }
        }
        case todoFormActions.SET_DESCRIPTION: {
            return { ...state, description: { isValid: true, value: action.payload.value } }
        }
        case todoFormActions.SET_DUE_DATE: {
            return { ...state, dueDate: { isValid: action.payload.isValid, value: action.payload.value } }
        }
        default:
            return state
    }
}