import { configureStore } from '@reduxjs/toolkit'

/* Reducers */
import dataReducer from './reducers/dataReducer'

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
