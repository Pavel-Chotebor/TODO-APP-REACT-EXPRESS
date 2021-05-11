export const todoFormActions = {
    SET_TITLE: "SET_TITLE",
    SET_DESCRIPTION: "SET_DESCRIPTION",
    SET_DUE_DATE: "SET_DUE_DATE",
}

export const setTitle = (isValid, value) => ({
    type: todoFormActions.SET_TITLE,
    payload: { isValid, value }
})

export const setDescription = (value) => ({
    type: todoFormActions.SET_DESCRIPTION,
    payload: { value }
})

export const setDueDate = (isValid, value) => ({
    type: todoFormActions.SET_DUE_DATE,
    payload: { isValid, value }
})
