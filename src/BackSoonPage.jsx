import React from "react";
import Dino from "/assets/images/dino.gif";
import Kshitij from "/assets/images/KshitijBlack.webp";
import SponsorComponent from "./components/SponsorComponent";

function BackSoonPage() {
  return (

      <div className="flex flex-col h-screen w-full justify-center items-center gap-10 bg-white text-black">
        <div className="flex justify-center items-center gap-2">
          <img
            src={Kshitij}
            className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36"
            alt=""
          />
          <h1 className="sm:text-5xl text-2xl font-arcade">
            Mithibai Kshitij
          </h1>
    </div>
        <img className="max-w-screen" src={Dino} alt="" />
        <h1 className="sm:text-4xl text-md font-arcade ">coming soon...</h1>



        <SponsorComponent />

      </div>

  );
}

export default BackSoonPage;
