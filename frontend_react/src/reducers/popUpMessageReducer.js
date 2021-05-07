import { popUpMessageActions } from '../actions/popUpMessageActions'

export const popUpMessageReducer = (state = [], action) => {
    switch (action.type) {
        case popUpMessageActions.SET_MESSAGE: {
            return action.payload
        }
        default:
            return state;
    }
}
