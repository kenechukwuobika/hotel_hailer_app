import backend from '../config/api';

export const getPropertyReviewService = async (id, params={}) => {
    return await backend.get(`/properties/${id}/reviews`, {
        params
    });
}

export const getNearbyProperties = async (params) => {
    return await backend.get('/properties/nearby', {
        params
    })
}

export const getOnePropertyService = async (id) => {
    return await backend.get(`/properties/${id}`)
}