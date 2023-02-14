import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ModalOpen: false,
  ModalType: '',
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    OPEN_MODAL: (state, action) => {
      state.ModalOpen = true
      state.ModalType = action.payload
    },
    CLOSE_MODAL: (state) => {
      state.ModalOpen = false
      state.ModalType = ''
    },
  },
})

export const { OPEN_MODAL, CLOSE_MODAL } = modalSlice.actions

export default modalSlice.reducer
