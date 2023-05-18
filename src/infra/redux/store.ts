import { configureStore } from '@reduxjs/toolkit'
import querySlice from '@/infra/redux/features/query/slice'

export const store = configureStore({
  reducer: {
    querySlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
