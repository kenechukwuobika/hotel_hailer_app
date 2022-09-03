import backend from '../config/api';

export const getPopularProperties = async (data) => {
    return await backend.get('/auth/login', data);
}

export const getNearbyProperties = async (params) => {
    return await backend.get('/properties/nearby', {
        params
    })
}

export const getOnePropertyService = async (id) => {
    return await backend.get(`/properties/${id}`)
}