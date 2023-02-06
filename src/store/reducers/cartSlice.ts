import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  order: any[]
  total: number
  errorQuantity: boolean
  maxQuantity: number
}

const initialState: CartState = {
  order: [],
  total: 0,
  errorQuantity: false,
  maxQuantity: 5,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.order.findIndex((product) => product.slug === action.payload.slug)

      if (find >= 0) {
        state.order[find].quantity += action.payload.quantity
        if (state.order[find].quantity > state.maxQuantity) {
          state.errorQuantity = true
          state.order[find].quantity = state.maxQuantity
        }
      }

      find < 0 ? (state.order = [...state.order, action.payload]) : ''

      state.total = state.order.reduce((result, cartItem) => result + cartItem.price * cartItem.quantity, 0)
    },
    increaseCart: (state, action) => {
      let find = state.order.findIndex((product) => product.slug === action.payload.slug)

      if (find >= 0) {
        state.order[find].quantity < state.maxQuantity ? (state.order[find].quantity += 1) : ''
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
    clearErrorQuantity: (state) => {
      state.errorQuantity = false
    },
  },
})

export const { addToCart, increaseCart, decreaseCart, clearCart, clearErrorQuantity } = cartSlice.actions

export default cartSlice.reducer
