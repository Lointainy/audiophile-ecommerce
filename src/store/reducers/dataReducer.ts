import { createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs'

const initialState = {
  colorTheme: 'light',
  overlay: false,
  nav: false,
  cartModal: false,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    SET_THEME: (state, action) => {
      state.colorTheme = action.payload
    },
    SET_OVERLAY: (state) => {
      state.overlay = !state.overlay
    },
    TOGGLE_NAV: (state) => {
      state.nav = !state.nav
    },
    TOGGLE_MODAL_CART: (state) => {
      state.cartModal = !state.cartModal
    },
  },
})

export const { SET_THEME, SET_OVERLAY, TOGGLE_NAV, TOGGLE_MODAL_CART } = dataSlice.actions

export default dataSlice.reducer
