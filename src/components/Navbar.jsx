import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Kshitij from "/assets/images/KshitijWhite.webp";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-gradient-to-tr from-fuchsia-900 to-indigo-900 font-manrope">
        <nav className="flex items-center justify-between w-[95%] mx-auto">
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
            <ul className="flex lg:flex-row flex-col lg:items-center items-center lg:gap-10 gap-8 font-semibold">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/core-committee">Core Committee</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
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
