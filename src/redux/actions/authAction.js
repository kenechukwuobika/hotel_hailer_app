import { login, signup } from '../../services/authService';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginAction = (loginDetails) => async (dispatch, getState) => {
    try {
        console.log(loginDetails);
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

export const signupAction = (signupDetails) => async (dispatch, getState) => {
    try {
        console.log(signupDetails);
        const response = await signup(signupDetails);
        const { data } = response;
        if(data.status === "success"){
	        await AsyncStorage.setItem('authToken',  data.token);
        }
        dispatch({
            type: 'SIGN_IN',
            payload: response.data,
        });
    } catch (error) {
        let errorMessage = "Something went wrong";
        
        if(error && error.response !== undefined && error.response.data !== undefined) {
            errorMessage = error.response.data.message;
        }

        const { errors } = error.response.data;

        const keys = Object.keys(errors);
        
        const errorMessages = keys.map(key => {
            return errors[key].message;
        });

        // console.log(errorMessages)

        dispatch({
            type: "SIGN_UP_ERROR",
            payload: errorMessages
        })
    }
}

export const signoutAction = (loginDetails) => async (dispatch) => {
    await AsyncStorage.removeItem('authToken');
    dispatch({
        type: 'SIGN_OUT'
    });
}

export const showLoading = () => (dispatch) => {
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

export const clearAuthError = () => (dispatch, getState) => {
    dispatch({
        type: "SIGN_UP_ERROR",
        payload: null
    })
}

export const clearLoginError = () => (dispatch, getState) => {
    dispatch({
        type: "SIGN_IN_ERROR",
        payload: null
    })
}