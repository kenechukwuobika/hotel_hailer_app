
export const showModal = (modalType) => (dispatch, getState) => {
    dispatch({
        type: 'SHOW_MODAL',
        payload: modalType
    });
}

export const hideModal = () => (dispatch, getState) => {
    dispatch({
        type: 'HIDE_MODAL'
    });
}