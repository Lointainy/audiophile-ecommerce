import { createSlice } from '@reduxjs/toolkit'

interface Istate {
  colorTheme: string
  nav: boolean
}

const initialState: Istate = {
  colorTheme: 'light',
  nav: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.colorTheme = action.payload
    },
    toggleNav: (state) => {
      state.nav = !state.nav
    },
    closeNav: (state) => {
      state.nav = false
    },
  },
})

export const { setTheme, toggleNav, closeNav } = uiSlice.actions

export default uiSlice.reducer
