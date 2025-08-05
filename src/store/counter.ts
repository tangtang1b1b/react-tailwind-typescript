import { createSlice } from '@reduxjs/toolkit'

type BuyListItem = {
  name: string
  price: number
}
interface CounterState {
  currentNum: number
  buyList: BuyListItem[]
}

const initialState: CounterState = {
  currentNum: 0,
  buyList: [],
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.currentNum += 1
    },
    decrement(state) {
      state.currentNum -= 1
    },
    setCount(state, action) {
      state.currentNum = action.payload
    },
  },
})

export const { increment, decrement, setCount } = counterSlice.actions
export default counterSlice.reducer
