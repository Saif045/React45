import React, { useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const navbar = () => {
  const [nav, setNav] = useState(false);

 
 

  return (
    <div className="text-white fixed top-0 bg-black w-screen z-50 flex justify-between items-center h-24  md:px-20 px-4  ">
      <h1 className=" w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className=" hidden md:flex">
        <li className=" p-4"> Home </li>
        <li className=" p-4"> Company </li>
        <li className=" p-4"> Resources </li>
        <li className=" p-4"> About </li>
        <li className=" p-4"> Contact </li>
      </ul>

      <div onClick={()=>setNav(!nav)} className="flex md:hidden m-4">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div
        className={
          nav
            ? " fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : `fixed left-[-100%]`
        }>
        <h1 className=" w-full text-3xl font-bold text-[#00df9a] m-7">REACT.</h1>

        <ul className=" uppercase p-4 ">
          <li className=" p-4 border-b border-gray-400"> Home </li>
          <li className=" p-4 border-b border-gray-400"> Company </li>
          <li className=" p-4 border-b border-gray-400"> Resources </li>
          <li className=" p-4 border-b border-gray-400"> About </li>
          <li className=" p-4 border-b border-gray-400"> Contact </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
