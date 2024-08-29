import React from "react";
import Dino from "/assets/images/dino.gif";
import Kshitij from "/assets/images/KshitijBlack.webp";

function BackSoonPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center gap-10">
        <div className="flex justify-center items-center gap-2">
          <img
            src={Kshitij}
            className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36"
            alt=""
          />
          <h1 className="sm:text-5xl text-3xl font-arcade ">
            Mithibai Kshitij
          </h1>
        </div>
        <img className="max-w-screen" src={Dino} alt="" />
        <h1 className="sm:text-4xl text-sm font-arcade ">coming soon...</h1>
      </div>
    </>
  );
}

export default BackSoonPage;
