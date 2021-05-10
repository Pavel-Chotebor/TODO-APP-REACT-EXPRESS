import { userActions } from '../actions/userActions'

const userValues = {
    username: {
        isValid: false,
        value: '',
    },
    password: {
        isValid: false,
        value: ''
    },
    passwordToRepeat: {
        isValid: false,
        value: ''
    },
}

export const userReducer = (state = { ...userValues }, action) => {
    switch (action.type) {
        case userActions.SET_USERNAME: {
            return { ...state, username: { isValid: action.payload.isValid, value: action.payload.value } }
        }
        case userActions.SET_PASSWORD: {
            return { ...state, password: { isValid: action.payload.isValid, value: action.payload.value } }
        }
        case userActions.SET_PASSWORD_TO_REPEAT: {
            const tempValue = action.payload
            const isPasswordsSame = state.password.value === tempValue
            return { ...state, passwordToRepeat: { isValid: isPasswordsSame, value: tempValue } }
        }
        default:
            return state
    }
}
