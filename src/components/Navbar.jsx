import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
const navbar = () => {
  const [nav, setNav] = useState(false);

  const closeMenu = () => {
    setNav(false);
  };

  return (
    <div className="text-white fixed top-0 bg-black w-screen z-50 flex justify-between items-center h-24 px-10 md:px-20 xl:px-32">
      <h1 className=" w-full text-3xl font-bold text-[#00df9a] cursor-pointer">
        <Link to="hero" spy={true} smooth={true} offset={-50} duration={500}>
          REACT.
        </Link>
      </h1>
      <ul className=" hidden md:flex">
        <li className=" p-4 cursor-pointer">
          <Link to="hero" spy={true} smooth={true} offset={-50} duration={500}>
            Home
          </Link>
        </li>

        <li className=" p-4 cursor-pointer">
          {" "}
          <Link
            to="Resources"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}>
            Resources
          </Link>
        </li>
        <li className=" p-4 cursor-pointer">
          <Link
            to="Prices"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}>
            Prices
          </Link>
        </li>
        <li className=" p-4 cursor-pointer">
          {" "}
          <Link to="About" spy={true} smooth={true} offset={-50} duration={500}>
            About
          </Link>
        </li>
        <li className=" p-4 cursor-pointer">
          {" "}
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <button onClick={() => setNav(!nav)} className="flex md:hidden m-4">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </button>

      <div
        className={
          nav
            ? " fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : `fixed left-[-100%]`
        }>
        <div className=" w-full text-3xl font-bold text-[#00df9a] m-7 cursor-pointer">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMenu}>
            REACT.
          </Link>
        </div>

        <ul className=" uppercase p-4 ">
          <li className=" p-4 border-b border-gray-400 cursor-pointer">
            {" "}
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}>
              Home
            </Link>{" "}
          </li>
          <li className=" p-4 border-b border-gray-400 cursor-pointer">
            {" "}
            <Link
              to="Resources"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}>
              Resources
            </Link>{" "}
          </li>
          <li className=" p-4 border-b border-gray-400 cursor-pointer">
            {" "}
            <Link
              to="Prices"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}>
              Prices
            </Link>{" "}
          </li>
          <li className=" p-4 border-b border-gray-400 cursor-pointer">
            {" "}
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}>
              About
            </Link>{" "}
          </li>
          <li className=" p-4 border-b border-gray-400 cursor-pointer">
            {" "}
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}>
              Contact
            </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
