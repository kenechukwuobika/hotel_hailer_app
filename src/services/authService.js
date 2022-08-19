import axios from 'axios';
import backend from '../config/api';

export const login = async (data) => {
    return await backend.post('/auth/login', data);
}

export const register = async () => {
    return await axios.post('/login', {})
}