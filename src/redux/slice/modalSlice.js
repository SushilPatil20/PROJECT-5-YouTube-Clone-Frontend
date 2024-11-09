import { createSlice } from "@reduxjs/toolkit";

const videoModalSlice = createSlice({
    name: "videoModal",
    initialState: {
        isOpen: false,
        videoData: null, // You can store video data for editing here
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.videoData = action.payload; // Store video data if needed
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.videoData = null; // Clear video data when closing
        },
        toggleModal: (state, action) => {
            state.isOpen = !state.isOpen;
            state.videoData = state.isOpen ? action.payload : null;
        },
    },
});

// Export actions and reducer
export const { openModal, closeModal, toggleModal } = videoModalSlice.actions;
export default videoModalSlice.reducer;
