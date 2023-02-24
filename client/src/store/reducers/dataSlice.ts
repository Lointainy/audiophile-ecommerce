import { Iproduct } from '@types'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

type stateType = {
  products: Iproduct[]
  isLoading: boolean
  isError: boolean
}

const initialState: stateType = {
  products: [],
  isLoading: false,
  isError: false,
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const { data } = await axios.get(`${API_URL}/products`)
  return data
})

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Get all products */
    builder
      .addCase(getProducts.pending, (state) => {
        state.products = []
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.isLoading = false
      })
      .addCase(getProducts.rejected, (state) => {
        state.isError = true
      })
  },
})

export const {} = dataSlice.actions

export default dataSlice.reducer
