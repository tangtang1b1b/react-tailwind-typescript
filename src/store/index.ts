import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// 匯出類型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
