import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen
        },
        closeSidebar: (state) => {
            state.isOpen = false;
        },
    }
})

export const { toggleSidebar, closeSidebar } = sideBarSlice.actions
export default sideBarSlice.reducer