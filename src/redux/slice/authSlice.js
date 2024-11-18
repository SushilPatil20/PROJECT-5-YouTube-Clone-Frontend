import { createSlice } from "@reduxjs/toolkit";
import { getLocal, removeLocal, storeLocal } from "../../utils/helpers";

const initialState = {
    token: getLocal("authToken") || null, // Retrieve token from localStorage
    isAuthenticated: Boolean(getLocal("authToken")), // Boolean flag for authentication status
    userId: getLocal("userId") || null, // Retrieve userId if available
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Handle successful login
        loginSuccess: (state, action) => {
            const { token, userId } = action.payload; // Destructure payload
            state.token = token;
            state.userId = userId;
            state.isAuthenticated = true;

            // Persist data to localStorage
            storeLocal("authToken", token);
            storeLocal("userId", userId);
        },

        // Handle logout and clear stored data
        logout: (state) => {
            state.token = null;
            state.userId = null;
            state.isAuthenticated = false;

            // Clear data from localStorage
            removeLocal("authToken");
            removeLocal("userId");
        }
    },
});

// Export actions for use in components
export const { loginSuccess, logout } = authSlice.actions;

// Export the reducer for integration with the store
export default authSlice.reducer;
