"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return <div>Count: {count}</div>;
};

export default CounterDisplay;
