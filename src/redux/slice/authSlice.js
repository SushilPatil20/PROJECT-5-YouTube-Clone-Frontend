import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("authToken") || null, // Retrieve token from localStorage if available
    isAuthenticated: Boolean(localStorage.getItem("authToken")),
    user: null,
    error: null,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            localStorage.setItem("authToken", action.payload.token); // Remove token from localStorage
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem("authToken"); // Remove token from localStorage
        },
    }
})

export const { logout, loginSuccess } = authSlice.actions
export default authSlice.reducer
