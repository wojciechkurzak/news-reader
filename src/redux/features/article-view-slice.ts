import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ArticleViewState from '../../interfaces/article-view-interface'
import { ArticleViewStateType } from '../../../gnNews/src/types/store-types'

const initialState: ArticleViewState = {
  type: 'list',
}

const articleViewSlice = createSlice({
  name: 'artcile-view',
  initialState,
  reducers: {
    changeArticleView(state, action: PayloadAction<ArticleViewStateType>) {
      state.type = action.payload
    },
  },
})

export const { changeArticleView } = articleViewSlice.actions
export default articleViewSlice.reducer
