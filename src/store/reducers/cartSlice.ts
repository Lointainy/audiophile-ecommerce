import { createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs'

interface CartState {
  order: any[]
}

const initialState: CartState = {
  order: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      let find = state.order.findIndex((product) => product.slug === action.payload.slug)

      find >= 0 ? (state.order[find].quantity += action.payload.quantity) : ''
      find < 0 ? (state.order = [...state.order, action.payload]) : ''
    },
  },
})

export const { AddToCart } = cartSlice.actions

export default cartSlice.reducer
