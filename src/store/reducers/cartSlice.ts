import { createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs'

interface CartState {
  order: any[]
  total: number
}

const initialState: CartState = {
  order: [],
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.order.findIndex((product) => product.slug === action.payload.slug)

      find >= 0 ? (state.order[find].quantity += action.payload.quantity) : ''
      find < 0 ? (state.order = [...state.order, action.payload]) : ''

      state.total = state.order.reduce((result, cartItem) => result + cartItem.price * cartItem.quantity, 0)
    },
    increaseCart: (state, action) => {
      let find = state.order.findIndex((product) => product.slug === action.payload.slug)

      if (find >= 0) {
        state.order[find].quantity < 5 ? (state.order[find].quantity += 1) : ''
      } else {
        state.order = [...state.order, action.payload]
      }

      state.total = state.order.reduce((result, cartItem) => result + cartItem.price * cartItem.quantity, 0)
    },
    decreaseCart: (state, action) => {
      let find = state.order.findIndex((product) => product.slug === action.payload.slug)

      if (find >= 0) {
        state.order[find].quantity > 1 ? (state.order[find].quantity -= 1) : ''
      } else {
        state.order = [...state.order, action.payload]
      }

      state.total = state.order.reduce((result, cartItem) => result + cartItem.price * cartItem.quantity, 0)
    },
    clearCart: (state) => {
      state.order = []
      state.total = 0
    },
  },
})

export const { addToCart, increaseCart, decreaseCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
