"use client";

import { decrement, increment, incrementByAmount } from "@/store/counterSlice";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter: React.FC = () => {
  const dispatch = useDispatch();

  const { value, min, max, amount } = useSelector(
    (state: RootState) => state.counter
  );

  const isDisabled = {
    increment: value >= max,
    decrement: value <= min,
    incrementByAmount: value + amount > max,
    incrementMinValue: min + 1 > max,
    decrementMaxValue: max - 1 < min,
    incrementAmount: amount + 1 > max,
    decrementAmount: amount - 1 < 1,
  };

  const handleIncrement = (type?: "amount" | "min" | "max") => {
    dispatch(increment({ type }));
  };

  return (
    <div className="flex flex-row justify-between gap-x-4">
      <div className="flex flex-col items-start gap-5">
        <button
          className="p-4 bg-slate-500 disabled:bg-slate-500/30"
          onClick={() => dispatch(increment({ type: "amount" }))}
          disabled={isDisabled.incrementAmount}
        >
          Increment Amount
        </button>
        <button
          className="p-4 bg-slate-500 disabled:bg-slate-500/30"
          onClick={() => dispatch(decrement({ type: "amount" }))}
          disabled={isDisabled.decrementAmount}
        >
          Decrement Amount
        </button>
      </div>

      <div className="flex flex-col items-start gap-5">
        <button
          className="p-4 bg-slate-500 disabled:bg-slate-500/30"
          onClick={() => dispatch(increment({}))}
          disabled={isDisabled.increment}
        >
          Increment
        </button>
        <button
          className="p-4 bg-slate-500 disabled:bg-slate-500/30"
          onClick={() => dispatch(decrement({}))}
          disabled={isDisabled.decrement}
        >
          Decrement
        </button>
        <button
          className="p-4 bg-slate-500 disabled:bg-slate-500/30"
          onClick={() => dispatch(incrementByAmount(amount))}
          disabled={isDisabled.incrementByAmount}
        >
          Increment by {amount}
        </button>
      </div>

      <div className="flex flex-row items-start gap-5">
        <div className="flex flex-col gap-4">
          <button
            className="p-2 bg-slate-500 disabled:bg-slate-500/30"
            onClick={() => dispatch(increment({ type: "min" }))}
            disabled={isDisabled.incrementMinValue}
          >
            (+) Min
          </button>
          <button
            className="p-2 bg-slate-500 disabled:bg-slate-500/30"
            onClick={() => dispatch(decrement({ type: "min" }))}
          >
            (-) Min
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="p-2 bg-slate-500 disabled:bg-slate-500/30"
            onClick={() => dispatch(increment({ type: "max" }))}
          >
            (+) Max
          </button>
          <button
            className="p-2 bg-slate-500 disabled:bg-slate-500/30"
            onClick={() => dispatch(decrement({ type: "max" }))}
            disabled={isDisabled.decrementMaxValue}
          >
            (-) Max
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
