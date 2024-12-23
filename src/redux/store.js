import { configureStore } from "@reduxjs/toolkit"
import videoModalReducer from './slice/modalSlice'
import authReducer from "./slice/authSlice"
import userReducer from "./slice/userSlice"
import sideBarReducer from "./slice/sideBarSlice"



const store = configureStore({
    reducer: {
        videoModel: videoModalReducer,
        auth: authReducer,
        user: userReducer,
        sidebar: sideBarReducer
    }
})

export default store;
