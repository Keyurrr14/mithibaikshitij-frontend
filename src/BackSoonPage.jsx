import React from "react";
import Dino from "./assets/images/dino.gif";

function BackSoonPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <img className="max-w-screen" src={Dino} alt="" />
        <h1 className="text-3xl font-bold">Mithibai Kshitij is back ...</h1>
      </div>
    </>
  );
}

export default BackSoonPage;
