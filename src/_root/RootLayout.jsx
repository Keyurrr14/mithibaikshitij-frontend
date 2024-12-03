import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full">
      <Navbar/>
      <section className="flex flex-1 h-full bg-[url('/assets/images/bg.png')] !object-cover bg-cover">
         <Outlet />
      </section>

      <Footer />
    </div>
  );
};

export default RootLayout;
