import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
  currentNum: number
}

const initialState: CounterState = {
  currentNum: 0,
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
