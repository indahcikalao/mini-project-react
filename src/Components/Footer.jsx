import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full border-t">
      <p>
        &copy; {new Date().getFullYear()} Mini React Project by{" "}
        <span className="font-bold">Indah Cikal Al Gyfary Okthaviany</span>
      </p>
      <div className="flex justify-center items-center pt-2">
        <Link to="mailto:indahcikalao@gmail.com" className="px-1 ">
          <IoMail fontSize={23} />
        </Link>
        <Link to="https://www.instagram.com/icao17/" className="px-1">
          <BsInstagram fontSize={20} />
        </Link>
        <Link to="https://www.linkedin.com/in/indahcikalao/" className="px-1">
          <BsLinkedin fontSize={20} />
        </Link>
        <Link to="https://github.com/indahcikalao/" className="px-1">
          <BsGithub fontSize={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
