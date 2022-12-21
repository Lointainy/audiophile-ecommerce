import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: '',
  product: '',
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
})

export const {} = dataSlice.actions

export default dataSlice.reducer
