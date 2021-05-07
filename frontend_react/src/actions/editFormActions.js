export const editFormActions = {
    SHOW_EDIT_FROM: 'SHOW_EDIT_FROM',
    HIDE_EDIT_FORM: 'HIDE_EDIT_FORM',
}

export const showEditForm = (todoId) => ({
    type: editFormActions.SHOW_EDIT_FROM,
    payload: todoId
});

export const hideEditForm = (todoId) => ({
    type: editFormActions.HIDE_EDIT_FORM,
    payload: todoId
});
