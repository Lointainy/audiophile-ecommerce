import { configureStore } from '@reduxjs/toolkit'

import { productsApi } from './reducers/productsApi'

/* Reducers */
import cartReducer from './reducers/cartSlice'
import modalReducer from './reducers/modalSlice'
import uiReducer from './reducers/uiSlice'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    modal: modalReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
