import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-center p-4 w-full absolute bottom-0">
      &copy; Copyright {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
