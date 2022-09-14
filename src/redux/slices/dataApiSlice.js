import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const fetchApi = createAsyncThunk(
    'dataApi/fetchApi',
    async function (_, {rejectWithValue}) {
        try {
            const response = await axios
                .get(API_URL)
                .then(res => res.data);

            if (!response) {
                throw new Error('Server Error!');
            }

            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
)

export const dataApiSlice = createSlice({
    name: 'dataApi',
    initialState: {
        status: null,
        error: null,
        products: [],
        filteredCat: [],
        cart: [],
        total: 0
    },
    reducers: {
        filterCategory(state, action) {
            //Не нравится реализация, если на кнопке что-то другое написать, сломается
            state.filteredCat = state.products.filter(item => {
                if (action.payload === 'All') {
                    return state.products;
                } else {
                    return item.category === action.payload.toLowerCase();
                }
            });
        },
        sortProducts(state, action) {
            //Не нравится это, вроде DRY нарушен, switch case не исправит думаю
            if (action.payload === 'rating-to-low') {
                state.filteredCat.sort((a, b) => {
                    return b.rating.rate - a.rating.rate
                })
            }
            if (action.payload === 'rating-to-high') {
                state.filteredCat.sort((a, b) => {
                    return a.rating.rate - b.rating.rate
                })
            }
            if (action.payload === 'price-to-low') {
                state.filteredCat.sort((a, b) => {
                    return b.price - a.price
                })
            }
            if (action.payload === 'price-to-high') {
                state.filteredCat.sort((a, b) => {
                    return a.price - b.price
                })
            }
        },
        searchProduct(state, action) {
            //Не работает почему-то
            state.filteredCat.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()));
        },
        addProduct(state, action) {
            const findProduct = state.cart.find(item => item.id === action.payload.id);
            findProduct ? findProduct.quantity++ : state.cart.push(action.payload);
            state.total = state.cart.reduce((sum, item) => {
                return item.price * item.quantity + sum;
            }, 0).toFixed(2)
        },
        removeProduct(state, action) {
           state.cart = state.cart.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchApi.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchApi.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.products = action.payload;
            state.filteredCat = action.payload;
        },
        [fetchApi.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
})

export const {filterCategory, sortProducts, searchProduct, addProduct, removeProduct} = dataApiSlice.actions;

export default dataApiSlice.reducer;