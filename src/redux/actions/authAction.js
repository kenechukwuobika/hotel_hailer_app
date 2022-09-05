import { login } from '../../services/authService';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginAction = (loginDetails) => async (dispatch, getState) => {
    try {
        const response = await login(loginDetails);
        const { data } = response;
        if(data.status === "success"){
	        await AsyncStorage.setItem('authToken',  data.token);
        }
        dispatch({
            type: 'SIGN_IN',
            payload: response.data,
        });
    } catch (error) {
        console.log(error)
        let errorMessage = "Something went wrong";
        if(error && error.response !== undefined && error.response.data !== undefined) {
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