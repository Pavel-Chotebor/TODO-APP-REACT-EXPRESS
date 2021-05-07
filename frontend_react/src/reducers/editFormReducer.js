import { editFormActions } from '../actions/editFormActions'

export const editFormReducer  = (state = {}, action) => {
    switch (action.type) {
        case editFormActions.SHOW_EDIT_FORM: {
            return ''
        }
        case editFormActions.HIDE_EDIT_FORM: {
            return ''
        }
        default:
            return state;
    }
}