import { configureStore } from '@reduxjs/toolkit'
import dataApiSlice from "./slices/dataApiSlice.js";

export const store = configureStore({
    reducer: {
        dataApi: dataApiSlice,
    },
})