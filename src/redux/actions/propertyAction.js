import { getNearbyProperties, getOnePropertyService } from '../../services/propertyService';

export const getNearbyProperty = (data) => async (dispatch, getState) => {
    try {
        const response = await getNearbyProperties(data);
        dispatch({
            type: 'GET_NEARBY_PROPERTIES',
            payload: response.data.data,
        });
    } catch (error) {
        if( error.response.status === 401 || error.response.status === 403 ) {
            dispatch({
                type: "UNAUTHENTICATED",
                payload: error
            })
        }

        dispatch({
            type: "NETWORK_ERROR",
            payload: error
        })
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