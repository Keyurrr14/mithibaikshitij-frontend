import React from "react";

function CommitteeMemberCard({ designation, image, name, phone }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-lg sm:text-xl md:text-2xl font-milker tracking-wider text-white">
        {designation}
      </h1>
      <div className="h-60 w-48 sm:h-72 sm:w-56 md:h-80 md:w-64 bg-white rounded-3xl my-2">
        <img
          className="w-full h-full object-cover rounded-3xl pt-6 sm:pt-8 md:pt-10"
          src={image}
          alt={name}
        />
      </div>
      <h1 className="text-center text-lg sm:text-xl md:text-2xl font-milker tracking-wider text-white">
        {name}
      </h1>
      <h1 className="text-center text-md sm:text-lg md:text-xl font-lusitana font-bold tracking-wider text-white">
        {phone}
      </h1>
    </div>
  );
}

export default CommitteeMemberCard;
