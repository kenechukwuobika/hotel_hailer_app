import { getPropertyReviewService } from '../../services/reviewService';

export const getPropertyReview = (id, params) => async (dispatch, getState) => {
    try {
        const response = await getPropertyReviewService(id, params);
        dispatch({
            type: 'GET_PROPERTY_REVIEWS',
            payload: response.data.data,
        });
    } catch (error) {
        // console.log(error['AxiosError'])
        // let errorMessage = "Something went wrong";
        // if(error && error.response) {
        //     errorMessage = error.response.data.message;
        // }
        // dispatch({
        //     type: "SIGN_IN_ERROR",
        //     payload: error
        // })
    }
}

export const getOneProperty = (id) => async (dispatch, getState) => {
    try {
        const response = await getOnePropertyService(id);
        dispatch({
            type: 'GET_ONE_PROPERTY',
            payload: response.data.data,
        });
    } catch (error) {
        // console.log(error['AxiosError'])
        // let errorMessage = "Something went wrong";
        // if(error && error.response) {
        //     errorMessage = error.response.data.message;
        // }
        // dispatch({
        //     type: "SIGN_IN_ERROR",
        //     payload: error
        // })
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