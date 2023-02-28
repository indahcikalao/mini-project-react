import React from "react";
import Hello from "../Components/Hello";
import Counter from "../Components/Counter";

const Home = () => {
  return (
    <div className="flex items-center flex-col w-full pt-2">
      <Hello name="User" />
      <Counter />
    </div>
  );
};

export default Home;
