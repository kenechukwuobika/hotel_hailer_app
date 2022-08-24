import { login } from '../../services/authService';

export const loginAction = (data) => async (dispatch, getState) => {
    try {
        const response = await login(data);
        dispatch({
            type: 'SIGN_IN',
            payload: response.message,
        });
    } catch (error) {
        console.log(error['AxiosError'])
        let errorMessage = "Something went wrong";
        if(error && error.response) {
            errorMessage = error.response.data.message;
        }
        dispatch({
            type: "SIGN_IN_ERROR",
            payload: errorMessage
        })
    }
}

export const showLoading = () => (dispatch, getState) => {
    dispatch({
        type: "SHOW_LOADING",
        payload: null
    })
}

export const clearLoading = () => (dispatch, getState) => {
    dispatch({
        type: "CLEAR_LOADING",
        payload: null
    })
}

export const clearLoginError = () => (dispatch, getState) => {
    dispatch({
        type: "SIGN_IN_ERROR",
        payload: null
    })
}