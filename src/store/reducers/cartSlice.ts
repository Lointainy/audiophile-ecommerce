import { createSlice } from '@reduxjs/toolkit'

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
    increaseCart: (state, action) => {
      let find = state.order.findIndex((product) => product.slug === action.payload.slug)

      if (find >= 0) {
        state.order[find].quantity < 5 ? (state.order[find].quantity += 1) : ''
      } else {
        state.order = [...state.order, action.payload]
      }
    },
    decreaseCart: (state, action) => {
      let find = state.order.findIndex((product) => product.slug === action.payload.slug)

      if (find >= 0) {
        state.order[find].quantity > 1 ? (state.order[find].quantity -= 1) : ''
      } else {
        state.order = [...state.order, action.payload]
      }
    },
  },
})

export const { AddToCart, increaseCart, decreaseCart } = cartSlice.actions

export default cartSlice.reducer
