import { describe, it, expect } from 'vitest'
import languageChangeReducer, {
  changeLanguage,
} from '../../redux/features/language-change-slice'

describe('language change reducer', () => {
  it('should handle change', () => {
    const initialState = { lang: 'pl-PL' }
    const action = { type: changeLanguage.type, payload: 'en-US' }
    const nextState = languageChangeReducer(initialState, action)
    expect(nextState.lang).toEqual('en-US')
  })
})
