import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="flex items-center flex-col w-full pt-2 text-center pb-5 px-3">
      <img
        style={{
          height: "350px",
          width: "400px",
          objectFit: "cover",
        }}
        src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=740&t=st=1677606007~exp=1677606607~hmac=7772212605d217e0ef4de0aff219940d8e176a4b651ffcdf46aa6470c4f85146"
        alt="contact me"
      />
      <h2 className="font-bold text-xl py-2">Hiya! Cikal's here!</h2>
      <h3 className=" py-1">
        These are my contacts info, feel free to say hi any time! ;D
      </h3>
      <div>
        <p className="px-1 flex items-center">
          <IoMail fontSize={20} className="mr-2" /> : indahcikalao@gmail.com
        </p>
        <p className="px-1 flex items-center">
          <BsInstagram fontSize={20} className="mr-2" /> : @icao17
        </p>
        <p className="px-1 flex items-center">
          <BsLinkedin fontSize={20} className="mr-2" /> :
          linkedin.com/in/indahcikalao/
        </p>
        <p className="px-1 flex items-center">
          <BsGithub fontSize={20} className="mr-2" /> : github.com/indahcikalao/
        </p>
      </div>
    </div>
  );
};

export default Contact;
