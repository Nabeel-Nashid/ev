import React from "react";
import { Link } from "react-scroll";
import { BsArrowRight } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';

function Navbar() {
  return (
    <div className="fixed w-full h-[80px] flex justify-around items-center px-4 bg-[#0a192f] text-gray-100">
      <div>logo</div>
      <ul className="flex flex-row gap-4">
        <Link to="home" smooth="true" duration={500}>
          <li className="">Home</li>
        </Link>
        <Link to="about" smooth="true" duration={500}>
          <li>About</li>
        </Link>
        <Link to="services" smooth="true" duration={500}>
          <li>Services</li>
        </Link>
        <Link to="pages" smooth="true" duration={500}>
          <li>Pages</li>
        </Link>
        <Link to="blogs" smooth="true" duration={500}>
          <li>Blogs</li>
        </Link>
        <Link to="contact" smooth="true" duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="flex items-center">
      <BsSearch className="mr-4 "/>
      <button className="rounded-2xl bg-white text-black p-2 flex items-center">Get a Quotes<BsArrowRight className="ml-2"/></button>
      </div>
    </div>
  );
}

export default Navbar;
