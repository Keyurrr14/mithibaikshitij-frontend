import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const RootLayout = () => {
  return (
    <div className="w-full">
      <Navbar/>
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Footer />
    </div>
  );
};

export default RootLayout;
