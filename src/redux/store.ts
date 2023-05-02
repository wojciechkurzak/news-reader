import { configureStore } from '@reduxjs/toolkit'
import articleViewReducer from './features/article-view-slice'
import articleCountReducer from './features/article-count-slice'
import menuVisibleReducer from './features/menu-visible-slice'
import languageChangeReducer from './features/language-change-slice'

export const store = configureStore({
  reducer: {
    articleView: articleViewReducer,
    articleCount: articleCountReducer,
    menuVisible: menuVisibleReducer,
    languageChange: languageChangeReducer,
  },
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
