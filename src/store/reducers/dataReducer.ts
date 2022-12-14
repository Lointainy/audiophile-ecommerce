import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  colorTheme: 'light',
  overlay: false,
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
  },
})

export const { SET_THEME, SET_OVERLAY } = dataSlice.actions

export default dataSlice.reducer
