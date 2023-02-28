import React from "react";
import { Link } from "react-router-dom";

const NaviMenu = ({ setShowMenu }) => {
  return (
    <div>
      <span className="font-bold pb-3">Menu</span>
      <Link
        to="/"
        className="text-blue-500 py-3 border-t border-b block text-sm"
        onClick={() => setShowMenu(false)}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-blue-500 py-3 border-t border-b block text-sm"
        onClick={() => setShowMenu(false)}
      >
        About
      </Link>
      <Link
        to="/contact-me"
        className="text-blue-500 py-3 border-t border-b block text-sm"
        onClick={() => setShowMenu(false)}
      >
        Contact Me
      </Link>
      <Link
        to="/counter"
        className="text-blue-500 py-3 border-t border-b block text-sm"
        onClick={() => setShowMenu(false)}
      >
        Counter
      </Link>
    </div>
  );
};

export default NaviMenu;
