import { configureStore } from '@reduxjs/toolkit'

/* Reducers */
import cartReducer from './reducers/cartSlice'
import dataReducer from './reducers/dataSlice'
import modalReducer from './reducers/modalSlice'
import uiReducer from './reducers/uiSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
    modal: modalReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
