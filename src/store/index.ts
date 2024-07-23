import { configureStore } from '@reduxjs/toolkit'
import api from '../service/api'
import carrinhoReducer from '../store/redurcer/carrinho'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    carrinho: carrinhoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
