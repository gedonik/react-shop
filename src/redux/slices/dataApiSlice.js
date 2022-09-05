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
    },
    reducers: {
        filterCategory(state, action)  {
            state.filteredCat = state.products.filter(item => {
                if (action.payload === 'All') {
                    return state.products;
                } else {
                    return item.category === action.payload.toLowerCase();
                }
            });
        },
//         searchProduct(state, action) {
// state.products.filter(item => item.action.payload === )
//         }
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


export const {filterCategory} = dataApiSlice.actions;

export default dataApiSlice.reducer;