import axios from 'axios';

// Create an Axios instance with base configurations
const api = axios.create({ baseURL: 'http://localhost:8000/api' });  // This my backend API URL

// Attach the JWT token to each request if it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Handle responses and errors globally if needed
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Check for unauthorized error and handle logout/redirection
        if (error.response && error.response.status === 401) {
            // Optionally, log out the user or redirect to login
            localStorage.removeItem('token'); // Clear the token on unauthorized error
        }
        return Promise.reject(error);
    }
);

export default api;
