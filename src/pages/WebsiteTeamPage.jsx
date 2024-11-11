import React from "react";
import DhruvAgarwal from "/assets/images/committee/DhruvAgarwal.webp";
import CommitteeMemberCard from "../components/CommitteeMemberCard";

function WebsiteTeamPage() {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-fuchsia-900 to-violet-900">
        <h1 className="font-seasons pt-10 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">
          WEBSITE TEAM
        </h1>


        <div className="flex flex-wrap justify-center gap-24 mt-14 w-[80%] mx-auto pb-10">
          <CommitteeMemberCard
            designation="Developer"
            image={DhruvAgarwal}
            name="Gaurav Mehra"
          />
          <CommitteeMemberCard
            designation="Developer"
            image={DhruvAgarwal}
            name="Keyur Rathod"
          />
          <CommitteeMemberCard
            designation="Developer"
            image={DhruvAgarwal}
            name="Shrey Chandpa"
          />
          <CommitteeMemberCard
            designation="Developer"
            image={DhruvAgarwal}
            name="Rajat Rane"
          />
          <CommitteeMemberCard
            designation="Developer"
            image={DhruvAgarwal}
            name="Mohit Deore"
          />
        </div>
      </div>
    </>
  );
}

export default WebsiteTeamPage;
