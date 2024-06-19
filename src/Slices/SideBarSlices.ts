import { createSlice } from '@reduxjs/toolkit'
import exp from 'constants'


export interface ISideBarState {
    sideBarValue: string
}
const initialState : ISideBarState = {
    sideBarValue: ''
}
export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    SET_SIDE_BAR_VALUE: (state, actions) => {
        console.log('SET_SIDE_BAR_Value' , actions.payload)
        state.sideBarValue = actions.payload
    },
  },
})

export  const { SET_SIDE_BAR_VALUE } = sideBarSlice.actions

export default sideBarSlice.reducer