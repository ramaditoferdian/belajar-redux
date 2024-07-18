import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  min: number;
  max: number;
  amount: number;
}

const initialState: CounterState = {
  value: 0,
  min: 0,
  max: 10,
  amount: 5,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (
      state,
      action: PayloadAction<{ type?: "amount" | "min" | "max" }>
    ) => {
      if (action.payload?.type === "amount") {
        state.amount += 1;
      } else if (action.payload?.type === "min") {
        state.min += 1;
      } else if (action.payload?.type === "max") {
        state.max += 1;
      } else {
        state.value += 1;
      }
    },
    decrement: (
      state,
      action: PayloadAction<{ type?: "amount" | "min" | "max" }>
    ) => {
      if (action.payload?.type === "amount") {
        state.amount -= 1;
      } else if (action.payload?.type === "min") {
        state.min -= 1;
      } else if (action.payload?.type === "max") {
        state.max -= 1;
      } else {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
