import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  colorTheme: 'light',
  nav: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    SET_THEME: (state, action) => {
      state.colorTheme = action.payload
    },
    toggleNav: (state) => {
      state.nav = !state.nav
    },
  },
})

export const { SET_THEME, toggleNav } = uiSlice.actions

export default uiSlice.reducer
