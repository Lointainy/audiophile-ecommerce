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
    setOrder: (state, action) => {
      let localOrder = JSON.parse(localStorage.getItem('order')) || []
      state.order = localOrder

      calcPrice(state)
    },
    addToCart: (state, action) => {
      let find = state.order.findIndex((product) => product.slug === action.payload.slug)

      if (find >= 0) {
        state.order[find].quantity += action.payload.quantity
        if (state.order[find].quantity > state.maxQuantity) {
          state.errorQuantity = true
          state.order[find].quantity = state.maxQuantity
        }
        localStorage.setItem('order', JSON.stringify(state.order))
      }

      if (find < 0) {
        state.order = [...state.order, action.payload]
        let localOrder = JSON.parse(localStorage.getItem('order')) || []
        localOrder.push(action.payload)
        localStorage.setItem('order', JSON.stringify(localOrder))
      }

      calcPrice(state)
    },
    increaseCart: (state, action) => {
      let find = state.order.findIndex((product) => product.slug === action.payload.slug)

      if (find >= 0) {
        state.order[find].quantity < state.maxQuantity ? (state.order[find].quantity += 1) : ''
        localStorage.setItem('order', JSON.stringify(state.order))
      } else {
        state.order = [...state.order, action.payload]
      }

      calcPrice(state)
      localStorage.setItem('order', JSON.stringify(state.order))
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
      localStorage.setItem('order', JSON.stringify(state.order))
    },
    clearCart: (state) => {
      state.order = []
      state.total = 0
      localStorage.setItem('order', JSON.stringify([]))
    },
    clearErrorQuantity: (state) => {
      state.errorQuantity = false
    },
  },
})

export const { setOrder, addToCart, increaseCart, decreaseCart, clearCart, clearErrorQuantity } = cartSlice.actions

export default cartSlice.reducer
