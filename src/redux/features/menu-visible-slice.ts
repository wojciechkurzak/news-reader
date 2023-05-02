import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import MenuVisibleState from '../../interfaces/menu-visible-interface'
import { MenuVisibleStateType } from '../../../src/types/store-types'

const initialState: MenuVisibleState = {
  visible: false,
}

const menuVisibleSlice = createSlice({
  name: 'menu-visible',
  initialState,
  reducers: {
    changeMenuVisible(state, action: PayloadAction<MenuVisibleStateType>) {
      state.visible = action.payload
    },
  },
})

export const { changeMenuVisible } = menuVisibleSlice.actions
export default menuVisibleSlice.reducer
