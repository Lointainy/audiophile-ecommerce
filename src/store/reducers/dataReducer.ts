import { createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs'

const initialState = {
  colorTheme: 'light',
  nav: false,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    SET_THEME: (state, action) => {
      state.colorTheme = action.payload
    },
    TOGGLE_NAV: (state) => {
      state.nav = !state.nav
    },
  },
})

export const { SET_THEME, TOGGLE_NAV } = dataSlice.actions

export default dataSlice.reducer
