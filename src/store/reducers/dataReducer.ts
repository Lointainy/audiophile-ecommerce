import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  colorTheme: 'light',
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    SET_THEME: (state, action) => {
      state.colorTheme = action.payload
    },
  },
})

export const { SET_THEME } = dataSlice.actions

export default dataSlice.reducer
