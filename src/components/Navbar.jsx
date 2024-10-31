import React from "react";
import { IoMenu } from "react-icons/io5";
import Kshitij from "/assets/images/KshitijWhite.webp";

function Navbar() {
  return (
    <>
      <header className="bg-black">
        <nav className="flex items-center justify-between w-[95%] mx-auto">
          <div className="flex items-center gap-2">
            <img className="h-20" src={Kshitij} alt="" />
            <h1 className="font-fairydust text-5xl tracking-wide">kshitij</h1>
          </div>
          <div className="md:static absolute bg-black md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-10 gap-8">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Core Committee</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Register</a>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex items-center justify-end">
            <IoMenu className="text-3xl cursor-pointer" />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
