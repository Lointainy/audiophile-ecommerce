import { createSlice } from '@reduxjs/toolkit'

interface Istate {
  modalOpen: boolean
  modalType: string
}

const initialState: Istate = {
  modalOpen: false,
  modalType: '',
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalOpen = true
      state.modalType = action.payload
    },
    closeModal: (state) => {
      state.modalOpen = false
      state.modalType = ''
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
