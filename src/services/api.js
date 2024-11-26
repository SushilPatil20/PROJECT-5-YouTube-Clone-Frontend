import axios from 'axios';
import { getLocal, removeLocal } from "../utils/helpers.js"

// Create an Axios instance with base configurations
const api = axios.create({ baseURL: 'http://localhost:8000/api' });  // This my backend API URL

// Attach the JWT token to each request if it exists
api.interceptors.request.use((config) => {
    const token = getLocal('authToken'); // Retrieve token from local storage
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error))


// Response Interceptor: Handle invalid / expired token
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401 || error.response && error.response.status === 403) {
            removeLocal("authToken")
            removeLocal("userId")
            window.location.href = '/signin';
        }
        return Promise.reject(error);
    }
);
export default api;


