import { configureStore } from '@reduxjs/toolkit'
import articleViewReducer from './features/article-view-slice'

export const store = configureStore({
  reducer: {
    articleView: articleViewReducer,
  },
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
