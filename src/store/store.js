import { configureStore } from "@reduxjs/toolkit"
import videoModalReducer from './slice/modalSlice'



const store = configureStore({
    reducer: {
        videoModel: videoModalReducer,
    }
})

export default store;
