import React from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-100">
      <ul className="hidden md:flex">
        <Link to="home" smooth="true" duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" smooth="true" duration={500}>
          <li>About</li>
        </Link>
        <Link to="skills" smooth="true" duration={500}>
          <li>Skill</li>
        </Link>
        <Link to="work" smooth="true" duration={500}>
          <li>Work</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
