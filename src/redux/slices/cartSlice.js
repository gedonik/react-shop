import {createSlice} from '@reduxjs/toolkit';

const totalCount = (state) => {
    state.total = state.cart.reduce((sum, item) => {
        return item.price * item.quantity + sum;
    }, 0).toFixed(2)
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        total: 0,
    },
    reducers: {
        addProduct(state, action) {
            const findProduct = state.cart.find(item => item.id === action.payload.id);
            findProduct ? findProduct.quantity++ : state.cart.push(action.payload);
            totalCount(state);
        },
        removeProduct(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            totalCount(state);
        },
        riseQuantity(state, action) {
            const findProduct = state.cart.find(item => item.id === action.payload);
            findProduct ? findProduct.quantity++ : null;
            totalCount(state);
        },
        reduceQuantity(state, action) {
            const findProduct = state.cart.find(item => item.id === action.payload);
            findProduct && findProduct.quantity > 0 ? findProduct.quantity-- : null;
            totalCount(state);
        },
        clearCart(state) {
            state.cart = [];
            state.total = 0;
        }
    },
})

export const {
    addProduct,
    removeProduct,
    reduceQuantity,
    riseQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;