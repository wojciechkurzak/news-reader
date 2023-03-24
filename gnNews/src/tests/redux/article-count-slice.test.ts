import { describe, it, expect } from 'vitest'
import articleCountReducer, {
  changeArticleCount,
} from '../../redux/features/article-count-slice'

describe('article count reducer', () => {
  it('should handle change', () => {
    const initialState = { value: 0 }
    const action = { type: changeArticleCount.type, payload: 20 }
    const nextState = articleCountReducer(initialState, action)
    expect(nextState.value).toEqual(20)
  })
})
