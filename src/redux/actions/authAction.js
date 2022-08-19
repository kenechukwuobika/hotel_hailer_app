import { login } from '../../services/authService';

export const loginAction = (data) => async (dispatch, getState) => {
    try {
        const response = await login(data);
        dispatch({
            type: 'SIGN_IN',
            payload: response.message,
        });
    } catch (error) {
        dispatch({
            type: "SIGN_IN_ERROR",
            payload: error.response.data.message
        })
    }
}

export const showLoading = () => (dispatch, getState) => {
    dispatch({
        type: "SHOW_LOADING",
        payload: null
    })
}

export const clearLoginError = () => (dispatch, getState) => {
    dispatch({
        type: "SIGN_IN_ERROR",
        payload: null
    })
}