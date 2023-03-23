import { configureStore } from '@reduxjs/toolkit'
import articleViewReducer from './features/article-view-slice'
import articleCountReducer from './features/article-count-slice'

export const store = configureStore({
  reducer: {
    articleView: articleViewReducer,
    articleCount: articleCountReducer,
  },
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
