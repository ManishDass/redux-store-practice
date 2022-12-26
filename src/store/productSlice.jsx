import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loading: true,
    data: [],
    // id: [],
    // title: [],
    // image: [],
    // price: [],
    // rating: {
    //     rate: [],
    //     count: []
    // },
    error: ''
}


export const fetchProducts = createAsyncThunk('product/fetchProducts', async ()=>{
    return  axios.get('https://fakestoreapi.com/products')
    .then((responce)=> responce.data )
})


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder)=> {
        builder.addCase(fetchProducts.pending,(state, action)=>{
            state.error = ''
        })

        builder.addCase(fetchProducts.fulfilled,(state, action)=>{
            state.loading = false
            state.data = action.payload
            // state.id = action.payload.map((e)=>e.id) 
            // state.title = action.payload.map((e)=>e.title)
            // state.image = action.payload.map((e)=>e.image) 
            // state.price = action.payload.map((e)=>e.price)
            // state.rating.rate = action.payload.map((e)=>e.rating.rate)
            // state.rating.count = action.payload.map((e)=>e.rating.count) 
            // return state.filter( item => item.id !== action.payload) 
        })

        builder.addCase(fetchProducts.rejected,(state, action) => {
            state.loading = false
            console.log(action.error)
            state.error = action.error.message
            // return state.filter( item => item.id !== action.payload) 
        })
    }
})

export default productSlice.reducer