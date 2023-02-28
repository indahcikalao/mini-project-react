import React from "react";

const About = () => {
  return (
    <div className="flex items-center flex-col w-full pt-2 text-center pb-5 px-3">
      <img
        style={{
          height: "300px",
          width: "350px",
          objectFit: "cover",
        }}
        src="https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-9336.jpg?w=740&t=st=1677605693~exp=1677606293~hmac=31cf1d7ae15f2808d48b66e1d8e2cdc1258a683c90d7b062a3162a5567e42d0b"
        alt="mini project"
      />
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
