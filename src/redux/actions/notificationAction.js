import backend from '../../config/api';

export const getNotifications = () => async (dispatch, getState) => {
    try {
        const response = await backend.get('/notifications');
        dispatch({
            type: 'GET_NOTIFICATIONS',
            payload: response.data.data,
        });
    } catch (error) {
        dispatch({
            type: "NETWORK_ERROR",
            payload: error
        })
    }
}