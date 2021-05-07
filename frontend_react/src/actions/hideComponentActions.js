export const hideComponentActions = {
    SET_SHOW: 'SET_SHOW',
    SET_HIDE: 'SET_HIDE',
}

export const setHide = (component) => ({
    type: hideComponentActions.SET_HIDE,
    payload: component

})

export const setShow = (component) => ({
    type: hideComponentActions.SET_SHOW,
    payload: component
})
