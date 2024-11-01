import React from "react";
import CommitteeMemberCard from "../components/CommitteeMemberCard";
import Background from "/assets/images/background.png";
import BhumiShah from "/assets/images/committee/BhumiShah.webp";
import DhruvAgarwal from "/assets/images/committee/DhruvAgarwal.png";

function CommitteePage() {
  return (
    <>
    <div className='w-full min-h-screen' style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
      <h1 className="font-lusitana pt-10 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        CORE COMMITTEE
      </h1>

      <h1 className="font-lusitana pt-8 text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        Top Core
      </h1>

      <div className="flex flex-wrap justify-center gap-24 mt-20 w-[95%] mx-auto">
        <CommitteeMemberCard
          designation="Chairperson"
          image={DhruvAgarwal}
          name="Dhruv Agarwal"
        />
        <CommitteeMemberCard
          designation="Deputy-Chairperson"
          image={BhumiShah}
          name="Bhumi Shah"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-24 mt-20 w-[95%] mx-auto">
        <CommitteeMemberCard
          designation="Vice-Chairperson"
          image={BhumiShah}
          name="Gehna Tibb"
        />
        <CommitteeMemberCard
          designation="Vice-Chairperson"
          image={BhumiShah}
          name="Rudra Trivedi"
        />
        <CommitteeMemberCard
          designation="Vice-Chairperson"
          image={BhumiShah}
          name="Krish Vora"
        />
        <CommitteeMemberCard
          designation="Vice-Chairperson"
          image={BhumiShah}
          name="Darsh Jain"
        />
      </div>

      <h1 className="font-lusitana pt-20 text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        Core
      </h1>

      <div className="flex flex-wrap justify-center gap-24 mt-20 w-[95%] mx-auto">
        <CommitteeMemberCard
          designation="Marketing"
          image={BhumiShah}
          name="Hasnain Agharia"
          phone="9619074161"
        />
        <CommitteeMemberCard
          designation="Marketing"
          image={BhumiShah}
          name="Apoorvi Bhatiya"
          phone="9826023903"
        />
        <CommitteeMemberCard
          designation="Marketing"
          image={BhumiShah}
          name="Soumya Pattnaik"
          phone="8861849596"
        />
        <CommitteeMemberCard
          designation="Finance"
          image={BhumiShah}
          name="Raj Goradia"
          phone="9820555132"
        />
        <CommitteeMemberCard
          designation="Artist Relations"
          image={BhumiShah}
          name="Mayank Savankar"
          phone="9923005261"
        />
        <CommitteeMemberCard
          designation="Artist Relations"
          image={BhumiShah}
          name="Riddhi Bheda"
          phone="9167122116"
        />
        <CommitteeMemberCard
          designation="Digital Media"
          image={BhumiShah}
          name="Pratham Maru"
          phone="9820095729"
        />
        <CommitteeMemberCard
          designation="Artist Relations"
          image={BhumiShah}
          name="Moksha Thakkar"
          phone="9869633123"
        />
        <CommitteeMemberCard
          designation="Graphics"
          image={BhumiShah}
          name="Sunidhi Yadav"
          phone="8828065975"
        />
        <CommitteeMemberCard
          designation="Graphics"
          image={BhumiShah}
          name="Pehu Makharia"
          phone="9352141516"
        />
        <CommitteeMemberCard
          designation="Literary Arts"
          image={BhumiShah}
          name="Nandini Verat"
          phone="8850375571"
        />
        <CommitteeMemberCard
          designation="Literary Arts"
          image={BhumiShah}
          name="Sanskriti Maheshwari"
          phone="7976016530"
        />
        <CommitteeMemberCard
          designation="Creative Arts"
          image={BhumiShah}
          name="Urja Sheth"
          phone="9137396966"
        />
        <CommitteeMemberCard
          designation="Technnicals"
          image={BhumiShah}
          name="Shreshth Koolwal"
          phone="8875762015"
        />
        <CommitteeMemberCard
          designation="Logistics"
          image={BhumiShah}
          name="Rudraksh Dave"
          phone="9769097906"
        />
        <CommitteeMemberCard
          designation="Logistics"
          image={BhumiShah}
          name="Lubhawani Singhal"
          phone="9414100974"
        />
        <CommitteeMemberCard
          designation="Gaming & Sports"
          image={BhumiShah}
          name="Zain Shah"
          phone="9137720045"
        />
        <CommitteeMemberCard
          designation="Gaming & Sports"
          image={BhumiShah}
          name="Raghav Drolia"
          phone="8120804000"
        />
        <CommitteeMemberCard
          designation="Performing Arts"
          image={BhumiShah}
          name="Gauri Kabra"
          phone="9179488341"
        />
        <CommitteeMemberCard
          designation="Performing Arts"
          image={BhumiShah}
          name="Ishanaya Ghia"
          phone="7400475387"
        />
        <CommitteeMemberCard
          designation="Photography"
          image={BhumiShah}
          name="Hardi Purohit"
          phone="9326008194"
        />
        <CommitteeMemberCard
          designation="Photography"
          image={BhumiShah}
          name="Aditya Haria"
          phone="7977785987"
        />
        <CommitteeMemberCard
          designation="Security"
          image={BhumiShah}
          name="Adi Chedda"
          phone="9819975840"
        />
        <CommitteeMemberCard
          designation="Security"
          image={BhumiShah}
          name="Kanishk Surana"
          phone="7005629072"
        />
        <CommitteeMemberCard
          designation="Informals"
          image={BhumiShah}
          name="Faruq Diddimani"
          phone="9833204688"
        />
        <CommitteeMemberCard
          designation="Bussiness Events"
          image={BhumiShah}
          name="Veeral Jain"
          phone="9586459718"
        />
        <CommitteeMemberCard
          designation="Branding Supplies"
          image={BhumiShah}
          name="Jainam Shah"
          phone="9969926444"
        />
        <CommitteeMemberCard
          designation="Branding Supplies"
          image={BhumiShah}
          name="Krish Gala"
          phone="8104244956"
        />
        <CommitteeMemberCard
          designation="Public Relations"
          image={BhumiShah}
          name="Pratham Choradiya"
          phone="8275007093"
        />
        <CommitteeMemberCard
          designation="Public Relations"
          image={BhumiShah}
          name="Prathana Shetty"
          phone="9769731353"
        />
        <CommitteeMemberCard
          designation="Hospitality"
          image={BhumiShah}
          name="Muddit Aggarwal"
          phone="8288831787"
        />
        <CommitteeMemberCard
          designation="Hospitality"
          image={BhumiShah}
          name="Shrishti Gupta"
          phone="7045996561"
        />
        <CommitteeMemberCard
          designation="Productions"
          image={BhumiShah}
          name="Divy Mehta"
          phone="9323787400"
        />
      </div>
    </div>
    </>
  );
}

export default CommitteePage;
