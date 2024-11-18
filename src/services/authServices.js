import api from './api.js';

// ----------------------------------- Register a new user -----------------------------------
export const registerUser = async (userData) => {
    try {
        const response = await api.post('/user/register', userData, { headers: { 'Content-Type': 'multipart/form-data' } });
        return response.data;
    } catch (error) {
        throw error.response?.data?.error || 'Server side issue : Registration failed. please check your internet connection.';
    }
};

// ----------------------------------- Login an existing user -----------------------------------
export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/user/login', credentials, { headers: { 'Content-Type': 'application/json' } });
        return response.data
    } catch (error) {
        return error.response?.data?.error || "Server side issue : login failed. please check your internet connection."
    }
};


export const getUser = async (userId) => {
    if (!userId) {
        throw new Error("User ID is required.");
    }
    try {
        const response = await api.get(`/user/get/${userId}`);
        return response.data;
    } catch (error) {
        const serverError = error.response?.data?.error || "Server side issue : failed to fetch user data. please check your internet connection.";
        throw new Error(serverError);
    }
};