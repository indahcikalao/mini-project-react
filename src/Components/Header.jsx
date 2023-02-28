import React from "react";
import { Link } from "react-router-dom";
import Navi from "./Navi";

const Header = () => {
  return (
    <div className="border-b py-3 px-8 flex justify-between items-center">
      <Link to="/" className="font-extrabold text-lg">
        MiniProject
      </Link>
      <Navi />
    </div>
  );
};

export default Header;
