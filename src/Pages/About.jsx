import React from "react";

const About = () => {
  return (
    <div className="flex items-center flex-col w-full pt-2 text-center ">
      <h2 className="font-bold text-xl py-2">Hello! Thank you for coming!</h2>
      <p>
        This is a mini project to learn the basic of React JS, React Router, and
        Tailwind CSS
      </p>
      <p>
        Shout out to{" "}
        <a
          href="https://www.udemy.com/user/quentin22/"
          className="font-semibold"
        >
          Quentin Watt
        </a>{" "}
        for providing this{" "}
        <a
          href="https://www.udemy.com/course/build-your-first-react-js-application/"
          className="font-semibold"
        >
          free course in Udemy
        </a>
        !
      </p>
    </div>
  );
};

export default About;
