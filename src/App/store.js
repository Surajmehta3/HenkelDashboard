import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../features/orderDetailSlice";

export const store = configureStore({
    reducer: {
        app: orderSlice
    }
})