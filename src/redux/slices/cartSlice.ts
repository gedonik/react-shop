import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";

type CartItem = {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
}

interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}

const initialState: CartSliceState = {
    totalPrice: 0,
    items: []
}

const totalCount = (state: RootState) => {
    state.total = state.cart.reduce((sum, item) => {
        return item.price * item.quantity + sum;
    }, 0).toFixed(2)
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<number>) {
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