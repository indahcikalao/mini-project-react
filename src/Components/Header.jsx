import React from "react";
import Navi from "./Navi";

const Header = () => {
  return (
    <div className="border-b py-3 px-8 flex justify-between items-center">
      <span className="font-extrabold text-lg">AppName</span>
      <Navi />
    </div>
  );
};

export default Header;
