import { configureStore } from "@reduxjs/toolkit"
import videoModalReducer from './slice/modalSlice'
import authReducer from "./slice/authSlice"


const store = configureStore({
    reducer: {
        videoModel: videoModalReducer,
        auth: authReducer,
    }
})

export default store;
