import api from './api.js';

// ----------------------------------- Register a new user -----------------------------------
export const registerUser = async (userData) => {
    try {
        const response = await api.post('/user/register', userData, { headers: { 'Content-Type': 'multipart/form-data' } });
        return response.data;
    } catch (error) {
        throw error.response?.data?.error || 'Registration failed';
    }
};

// ----------------------------------- Login an existing user -----------------------------------
export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/user/login', credentials, { headers: { 'Content-Type': 'application/json' } });
        return response.data
    } catch (error) {
        const serverError = await error.response?.data?.error || "Server side issue : login failed."
        return { serverError };
    }
};
