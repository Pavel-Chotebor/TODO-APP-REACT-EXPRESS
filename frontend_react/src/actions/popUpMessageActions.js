import { setHide, setShow } from './hideComponentActions'
import { componentsToChangeVisibility } from './visibilityHandler'

export const popUpMessageActions = {
    SET_MESSAGE: 'SET_MESSAGE',
}

let timer = 4000
export const setMessage = (message) => dispatch => {
    dispatch({
        type: popUpMessageActions.SET_MESSAGE,
        payload: message,
    })
    dispatch(setShow(componentsToChangeVisibility.POP_UP_MESSAGE))
    setTimeout(() => {
        dispatch(setHide(componentsToChangeVisibility.POP_UP_MESSAGE))
    }, timer)
    clearTimeout()
}
