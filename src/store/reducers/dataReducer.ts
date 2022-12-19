import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  colorTheme: 'light',
  nav: false,
  modal: {
    ModalType: '',
  },
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
    OPEN_MODAL: (state, action) => {
      state.modal.ModalType = action.payload
    },
  },
})

export const { SET_THEME, TOGGLE_NAV, OPEN_MODAL } = dataSlice.actions

export default dataSlice.reducer
