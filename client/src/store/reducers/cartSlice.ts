import { Iproduct } from '@types'
import { createSlice } from '@reduxjs/toolkit'

interface Istate {
  order: Iproduct[]
  total: number
  shipping: number
  vat: number
  grandTotal: number
  maxQuantity: number
  errorQuantity: boolean
}

const initialState: Istate = {
  order: [],
  total: 0,
  shipping: 50,
  vat: 0,
  grandTotal: 0,
  maxQuantity: 5,
  errorQuantity: false,
}

const calcPrice = (state: any) => {
  state.total = state.order.reduce((result: number, cartItem: any) => result + cartItem.price * cartItem.quantity, 0)
  state.vat = Math.round(state.total * 0.2)
  state.grandTotal = state.total + state.vat + state.shipping
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

      calcPrice(state)
    },
    increaseCart: (state, action) => {
      let find = state.order.findIndex((product) => product.slug === action.payload.slug)

      if (find >= 0) {
        state.order[find].quantity < state.maxQuantity ? (state.order[find].quantity += 1) : ''
      } else {
        state.order = [...state.order, action.payload]
      }

      calcPrice(state)
    },
    decreaseCart: (state, action) => {
      let find = state.order.findIndex((product) => product.slug === action.payload.slug)

      if (find >= 0) {
        state.order[find].quantity >= 1 ? (state.order[find].quantity -= 1) : ''
        state.order = state.order.filter((product) => product?.quantity > 0)
      } else {
        state.order = [...state.order, action.payload]
      }

      calcPrice(state)
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
