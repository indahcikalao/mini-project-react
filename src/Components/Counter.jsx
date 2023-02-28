import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  return (
    <>
      <h2 className="text-lg font-semibold">Counter</h2>
      <div className="flex item-center">
        <button
          className="border border-slate-300 hover:border-slate-400 rounded-full w-10 "
          onClick={() => setcount(count - 1)}
        >
          -
        </button>
        <h3 className="px-5">{count}</h3>
        <button
          className="border border-slate-300 hover:border-slate-400 rounded-full w-10"
          onClick={() => setcount(count + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
