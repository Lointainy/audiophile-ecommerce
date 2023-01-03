import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  product: '',
  newProduct: {},
  galleryProducts: [],
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const { data } = await axios.get('http://localhost:3000/api/products')
  return data
})

export const getNewProduct = createAsyncThunk('products/getNewProduct', async () => {
  const { data } = await axios.get('http://localhost:3000/api/new')
  return data
})

export const getGalleryProducts = createAsyncThunk('products/getGalleryProducts', async () => {
  const { data } = await axios.get('http://localhost:3000/api/gallery')
  return data
})

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.products = []
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload
        console.log(state.products)
      })
    builder
      .addCase(getNewProduct.pending, (state) => {
        state.product = {}
      })
      .addCase(getNewProduct.fulfilled, (state, action) => {
        state.product = action.payload
        console.log(state.product)
      })
    builder
      .addCase(getGalleryProducts.pending, (state) => {
        state.galleryProducts = {}
      })
      .addCase(getGalleryProducts.fulfilled, (state, action) => {
        state.galleryProducts = action.payload
        console.log(state.galleryProducts)
      })
  },
})

export const {} = dataSlice.actions

export default dataSlice.reducer
