import {createSlice} from '@reduxjs/toolkit';

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
            state.total = state.cart.reduce((sum, item) => {
                return item.price * item.quantity + sum;
            }, 0).toFixed(2)
        },
        removeProduct(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            state.total = state.cart.reduce((sum, item) => {
                return item.price * item.quantity + sum;
            }, 0).toFixed(2)
        },
        riseQuantity(state, action) {
            const findProduct = state.cart.find(item => item.id === action.payload);
            findProduct ? findProduct.quantity++ : null;
            state.total = state.cart.reduce((sum, item) => {
                return item.price * item.quantity + sum;
            }, 0).toFixed(2)
        },
        reduceQuantity(state, action) {
            const findProduct = state.cart.find(item => item.id === action.payload);
            findProduct && findProduct.quantity > 0 ? findProduct.quantity-- : null;
            state.total = state.cart.reduce((sum, item) => {
                return item.price * item.quantity + sum;
            }, 0).toFixed(2)
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