import { hideComponentActions } from '../actions/hideComponentActions'
import { componentsToChangeVisibility } from '../actions/visibilityHandler'

const visibilityOptions = {
    HIDDEN: 'hidden',
    SHOW: ''
}

export const visibilityState = {
    [componentsToChangeVisibility.POP_UP_MESSAGE]: visibilityOptions.HIDDEN,
}
export const hideComponentReducer = (state = visibilityState, action) => {
    switch (action.type) {
        case hideComponentActions.SET_HIDE: {
            return {...state, [action.payload]: visibilityOptions.HIDDEN  }
        }
        case hideComponentActions.SET_SHOW: {
            return { ...state, [action.payload]: visibilityOptions.SHOW }
        }
        default:
            return state;
    }
}
