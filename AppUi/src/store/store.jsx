import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import toastReducer from "./slices/toastSlice";

const Store = configureStore({
    reducer: {
        auth: authReducer,
        toast: toastReducer,
    }
})

export default Store;