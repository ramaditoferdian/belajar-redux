"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const {
    value: count,
    min,
    max,
    amount,
  } = useSelector((state: RootState) => state.counter);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Counter Display</h1>
      <div className="text-xl flex flex-row justify-between">
        <p>Amount: {amount}</p>
        <p>Count: {count}</p>
        <div className="flex flex-row gap-x-7">
          <p>Min: {min}</p>
          <p>Max: {max}</p>
        </div>
      </div>
    </div>
  );
};

export default CounterDisplay;
