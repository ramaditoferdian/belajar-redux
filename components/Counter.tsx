"use client";

import { decrement, increment, incrementByAmount } from "@/store/counterSlice";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter: React.FC = () => {
  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.counter.value);

  const amount = 5;
  const min = 0;
  const max = 10;

  const isDisabled = {
    increment: count >= max,
    decrement: count <= min,
    incrementByAmount: count + amount > max,
  };

  return (
    <div className="flex flex-col items-start gap-5">
      <button
        className="p-4 bg-slate-500 disabled:bg-slate-500/30"
        onClick={() => dispatch(increment())}
        disabled={isDisabled.increment}
      >
        Increment
      </button>
      <button
        className="p-4 bg-slate-500 disabled:bg-slate-500/30"
        onClick={() => dispatch(decrement())}
        disabled={isDisabled.decrement}
      >
        Decrement
      </button>
      <button
        className="p-4 bg-slate-500 disabled:bg-slate-500/30"
        onClick={() => dispatch(incrementByAmount(amount))}
        disabled={isDisabled.incrementByAmount}
      >
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;
