import { describe, it, expect } from 'vitest'
import menuVisibleReducer, {
  changeMenuVisible,
} from '../../redux/features/menu-visible-slice'

describe('menu visible reducer', () => {
  it('should handle change', () => {
    const initialState = { visible: false }
    const action = { type: changeMenuVisible.type, payload: true }
    const nextState = menuVisibleReducer(initialState, action)
    expect(nextState.visible).toEqual(true)
  })
})
