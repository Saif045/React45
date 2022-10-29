import React from "react";
import Laptop2 from "../assets/laptop2.png";

const About = () => {
  return (
    <div className=" w-full text-white px-4 py-16 " id="About">
      <div className=" max-w-[1240px] mx-auto grid  md:grid-cols-2">
        <div className=" flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">ABOUT US</p>
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            GROWING WITH DATA
          </h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className=" text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-[#00df9a]">
            Get Started
          </button>
        </div>

        <img className=" w-[500px] mx-auto my-4" src={Laptop2} alt="Laptop" />
      </div>
    </div>
  );
};

export default About;
