import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {

    },
})

export const {} = productsSlice.actions;

export default productsSlice.reducer;