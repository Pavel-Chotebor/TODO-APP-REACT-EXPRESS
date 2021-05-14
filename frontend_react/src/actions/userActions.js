export const userActions = {
    SET_USERNAME: 'SET_USERNAME',
    SET_PASSWORD: 'SET_PASSWORD',
    SET_PASSWORD_TO_REPEAT: 'SET_PASSWORD_TO_REPEAT',
}

export const setUsername = (value, isValid) => ({
    type: userActions.SET_USERNAME,
    payload: { isValid, value }
})

export const setPassword = (value, isValid) => ({
    type: userActions.SET_PASSWORD,
    payload: { isValid, value, }
})

export const setPasswordToRepeat = (value, isValid) => ({
    type: userActions.SET_PASSWORD_TO_REPEAT,
    payload: value
})