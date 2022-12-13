import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";

const Hero = () => {
 

  const container = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.4,
        type: "easeIn",
        opacity: { duration: 2 },
      },
    },
  };

  return (
    <div className=" text-white mt-40 h-screen w-full " id="hero">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className=" max-w-[800px] mt-[-96px] w-full h-full  mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>

        <div className=" flex justify-center items-center">
          <p className=" md:text-5xl sm:text-4xl text-xl font-bold  py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className=" md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typedSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <p className="  mx-8 sm:mx-16 md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, SASS
          platforms.
        </p>
        <button className=" bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
