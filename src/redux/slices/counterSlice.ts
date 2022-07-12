import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Counters = {
  id: number
  value: number
  buttons: number
}

export interface CounterState {
  counters: Counters[]
}

const initialState: CounterState = {
  counters: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementValue: (state: CounterState, action: PayloadAction<number>) => {
      state.counters[action.payload - 1].value += 1
    },
    decrementValue: (state: CounterState, action: PayloadAction<number>) => {
      state.counters[action.payload - 1].value -= 1
    },
    addCounter: (state: CounterState) => {
      const newCounter = {
        id: state.counters.length + 1,
        value: state.counters.reduce((acc, val) => acc + val.value, 0),
        buttons: (state.counters.length + 1) % 4,
      }
      state.counters.push(newCounter)
    },
    removeCounter: (state: CounterState, action: PayloadAction<number>) => {
      if (window.confirm('Are you sure you want to delete this counter?')) {
        state.counters = state.counters.filter((counter) => counter.id !== action.payload)
      }
    },
  },
})

export const { incrementValue, decrementValue, addCounter, removeCounter } = counterSlice.actions

export default counterSlice.reducer
