import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            return state.filter( item => item.id !== action.payload)
            //Remove single item and return rest of the items
        },
    }
})

export const { add, remove } = cartSlice.actions 
export default cartSlice.reducer