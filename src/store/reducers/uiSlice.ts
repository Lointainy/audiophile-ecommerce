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
    TOGGLE_NAV: (state) => {
      state.nav = !state.nav
    },
  },
})

export const { SET_THEME, TOGGLE_NAV } = uiSlice.actions

export default uiSlice.reducer
