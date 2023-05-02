import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import LanguageChangeState from '../../interfaces/language-change-interface'
import { LanguageChangeStateType } from '../../../gnNews/src/types/store-types'

const initialState: LanguageChangeState = {
  lang: 'en-US',
}

const languageChangeSlice = createSlice({
  name: 'language-change',
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<LanguageChangeStateType>) {
      state.lang = action.payload
    },
  },
})

export const { changeLanguage } = languageChangeSlice.actions
export default languageChangeSlice.reducer
