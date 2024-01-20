import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// get data
export const fetchData = createAsyncThunk('getData', async (args, { rejectWithValue }) => {
    const res = await fetch('https://decisive-sunset-saturn.glitch.me/get',{method:'get'})
    try {
        const result = await res.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
},[])

export const orderData = createSlice({
    name: 'orderData',
    initialState: {
        orders: [],
        loading: false,
        error: null,
        reData: []
    },
    extraReducers: {
        [fetchData.pending]: (state) => {
            state.loading = true
        },
        [fetchData.fulfilled]: (state, action) => {
            state.loading = false
            state.orders = action.payload
        },
        [fetchData.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default orderData.reducer