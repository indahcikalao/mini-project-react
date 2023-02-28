import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  return (
    <>
      <h2>Counter</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => setcount(count - 1)}>-</button>
        <h3 style={{ padding: "0 10px" }}>{count}</h3>
        <button onClick={() => setcount(count + 1)}>+</button>
      </div>
    </>
  );
};

export default Counter;
