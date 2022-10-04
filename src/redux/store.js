import {configureStore} from '@reduxjs/toolkit'
import catalogSlice from "./slices/catalogSlice.js";
import cartSlice from "./slices/cartSlice.js";
export const store = configureStore({
    reducer: {
        catalog: catalogSlice,
        cart: cartSlice,
    },
})