import axios from 'axios';
import backend from '../config/api';

export const login = async (data) => {
    return await backend.post('/auth/login', data);
}

export const signup = async (data) => {
    return await backend.post('/auth/signup', data);
}