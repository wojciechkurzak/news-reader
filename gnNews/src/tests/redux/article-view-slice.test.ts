import { describe, it, expect } from 'vitest'
import articleViewReducer, {
  changeArticleView,
} from '../../redux/features/article-view-slice'

describe('article view reducer', () => {
  it('should handle change', () => {
    const initialState = { type: 'list' }
    const action = { type: changeArticleView.type, payload: 'grid' }
    const nextState = articleViewReducer(initialState, action)
    expect(nextState.type).toEqual('grid')
  })
})
