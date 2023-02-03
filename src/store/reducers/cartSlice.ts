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
    addToCart: (state, action) => {
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
    clearCart: (state) => {
      state.order = []
    },
  },
})

export const { addToCart, increaseCart, decreaseCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
