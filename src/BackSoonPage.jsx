import React from "react";
import Dino from "/assets/images/dino.gif";

function BackSoonPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center gap-10">
        <h1 className="sm:text-5xl text-3xl font-arcade ">Mithibai Kshitij</h1>
        <img className="max-w-screen" src={Dino} alt="" />
        <h1 className="sm:text-4xl text-2xl font-arcade ">is back...</h1>
      </div>
    </>
  );
}

export default BackSoonPage;
