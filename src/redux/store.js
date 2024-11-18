import { configureStore } from "@reduxjs/toolkit"
import videoModalReducer from './slice/modalSlice'
import authReducer from "./slice/authSlice"
import userReducer from "./slice/userSlice"


const store = configureStore({
    reducer: {
        videoModel: videoModalReducer,
        auth: authReducer,
        user: userReducer
    }
})

export default store;
