import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

const initialState = {
  products: [],
  product: '',
  newProduct: {},
  galleryProducts: [],
  category: [],
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const { data } = await axios.get(`${API_URL}/products`)
  return data
})

export const getNewProduct = createAsyncThunk('products/getNewProduct', async () => {
  const { data } = await axios.get(`${API_URL}/new`)
  return data
})

export const getGalleryProducts = createAsyncThunk('products/getGalleryProducts', async () => {
  const { data } = await axios.get(`${API_URL}/gallery`)
  return data
})

export const getProductsByCategory = createAsyncThunk(
  'products/getProductsByCategory',
  async (categoryItems: string | undefined) => {
    const { data } = await axios.get(`${API_URL}/products`, {
      params: {
        category: categoryItems,
      },
    })
    return data
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Get all products */
    builder
      .addCase(getProducts.pending, (state) => {
        state.products = []
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload
        console.log('products', state.products)
      })
    /* Get all products by category*/
    builder
      .addCase(getProductsByCategory.pending, (state) => {
        state.category = []
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.category = action.payload.sort((a, b) => b.new - a.new)
        console.log('category', state.category)
      })
    /* Get new products */
    builder
      .addCase(getNewProduct.pending, (state) => {
        state.newProduct = {}
      })
      .addCase(getNewProduct.fulfilled, (state, action) => {
        state.newProduct = action.payload
        console.log('new', state.newProduct)
      })
    /* Get gallery products for home page */
    builder
      .addCase(getGalleryProducts.pending, (state) => {
        state.galleryProducts = []
      })
      .addCase(getGalleryProducts.fulfilled, (state, action) => {
        state.galleryProducts = action.payload
        console.log('gallery', state.galleryProducts)
      })
  },
})

export const {} = dataSlice.actions

export default dataSlice.reducer
