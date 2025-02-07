import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import React from "react";

const Header = () => {
  return (
         <header className="px-4 lg:px-6 h-16 flex items-center border-b ">
         <div className="flex items-center gap-2 font-bold text-xl">
         <span className="cursor-pointer text-blue-600">Go Vasuki</span>
         </div>
         <nav className="ml-auto flex gap-4 sm:gap-6 cursor-pointer mr-[30%]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/bus-booking"> Bus Booking</NavLink>
          <Link smooth to="#about">About Us</Link>
          <Link smooth to="#contact">Contact Us</Link>
         </nav>
         <button className="bg-blue-400 px-6 py-1 rounded-md cursor-pointer text-white">
          Login
         </button>
         </header>
  );
};

export default Header;
