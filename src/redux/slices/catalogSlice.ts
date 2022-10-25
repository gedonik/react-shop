import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
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
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

const initialState = {
    status: null,
    error: null,
    products: [],
    filteredCat: [],
    categories: [
        {key: 'all', title: 'All'},
        {key: "men's clothing", title: "Men's wear"},
        {key: "women's clothing", title: "Women's wear"},
        {key: "jewelery", title: "Jewelery"},
        {key: "electronics", title: "Tech"},
    ],
    currentCategory: 'all'
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        filterCategories(state, action: PayloadAction<string>) {
            state.currentCategory = action.payload;
            state.filteredCat = state.products.filter(product => {
                if (action.payload === 'all') {
                    return state.products;
                } else {
                    return product.category === action.payload;
                }
            });
        },
        sortProducts(state, action) {
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
            state.filteredCat = state.products.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApi.pending, (state, action) => {
            state.status = 'loading';
            state.error = null;
        });

        builder.addCase(fetchApi.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.products = action.payload;
            state.filteredCat = action.payload;
        });

        builder.addCase(fetchApi.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        });
    }
})

export const {filterCategories, sortProducts, searchProduct} = catalogSlice.actions;

export default catalogSlice.reducer;


// [fetchApi.pending]: (state) => {
//     state.status = 'loading';
//     state.error = null;
// },
//     [fetchApi.fulfilled]: (state, action) => {
//     state.status = 'resolved';
//     state.products = action.payload;
//     state.filteredCat = action.payload;
// },
//     [fetchApi.rejected]: (state, action) => {
//     state.status = 'rejected';
//     state.error = action.payload;
// },