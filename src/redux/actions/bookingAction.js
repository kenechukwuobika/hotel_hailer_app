import backend from '../../config/api';

export const getBookings = () => async (dispatch, getState) => {
    try {
        const response = await backend.get('/bookings');
        dispatch({
            type: 'GET_BOOKINGS',
            payload: response.data.data,
        });
    } catch (error) {
        dispatch({
            type: "NETWORK_ERROR",
            payload: error
        })
    }
}

export const getOneBooking = (id) => async (dispatch, getState) => {
    try {
        const response = await backend.get(`/bookings/${id}`);
        dispatch({
            type: 'GET_ONE_BOOKING',
            payload: response.data.data,
        });
    } catch (error) {
        dispatch({
            type: "NETWORK_ERROR",
            payload: error
        })
    }
}

export const clearOneBooking = () => async (dispatch, getState) => {
    dispatch({
        type: 'CLEAR_ONE_BOOKING'
    });
}