import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  colorTheme: 'light',
  overlay: false,
  nav: false,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    SET_THEME: (state, action) => {
      state.colorTheme = action.payload
    },
    SET_OVERLAY: (state, action) => {
      state.overlay = action.payload
    },
    TOGGLE_NAV: (state) => {
      state.nav = !state.nav
    },
  },
})

export const { SET_THEME, SET_OVERLAY, TOGGLE_NAV } = dataSlice.actions

export default dataSlice.reducer
