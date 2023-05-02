import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ArticleCountState from '../../interfaces/article-count-interface'
import { ArticleCountStateType } from '../../../gnNews/src/types/store-types'

const initialState: ArticleCountState = {
  value: 0,
}

const articleCountSlice = createSlice({
  name: 'artcile-count',
  initialState,
  reducers: {
    changeArticleCount(state, action: PayloadAction<ArticleCountStateType>) {
      state.value = action.payload
    },
  },
})

export const { changeArticleCount } = articleCountSlice.actions
export default articleCountSlice.reducer
