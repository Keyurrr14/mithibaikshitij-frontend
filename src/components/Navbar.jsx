import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Kshitij from "/assets/images/KshitijWhite.webp";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-gradient-to-tr from-fuchsia-900 to-indigo-900 font-lusitana sticky top-0 z-50 shadow-lg shadow-indigo-900/50">
        <nav className="flex items-center justify-between w-[97%] mx-auto">
          <div className="flex items-center gap-2">
            <img className="h-16 sm:h-18 md:h-20" src={Kshitij} alt="Kshitij Logo" />
            <h1 className="font-fairydust text-3xl sm:text-4xl md:text-5xl tracking-wide">kshitij</h1>
          </div>
          <div
            className={`lg:static absolute ${!isMenuOpen ? "" : "bg-gradient-to-tr from-fuchsia-900 to-indigo-900"} lg:min-h-fit min-h-[100vh] top-0
            ${isMenuOpen ? "right-0" : "right-[-100%]"}
            lg:w-auto w-full flex items-center justify-center px-5
            transition-all duration-300 ease-in
            z-10`}
          >
            <ul className="flex lg:flex-row flex-col lg:items-center items-center lg:gap-10 gap-8 font-bold text-lg">
              <li className="relative group">
                <NavLink to="/" className="block">Home</NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <NavLink to="/about">About Us</NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <NavLink to="/gallery">Gallery</NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <NavLink to="/core-committee">Core Committee</NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <NavLink to="/contact">Contact Us</NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <NavLink to="/register">Register</NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
          <div className="lg:hidden flex items-center justify-end">
            {isMenuOpen ? (
              <IoClose
                className="text-3xl cursor-pointer z-20"
                onClick={onToggleMenu}
              />
            ) : (
              <IoMenu
                className="text-3xl cursor-pointer"
                onClick={onToggleMenu}
              />
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
