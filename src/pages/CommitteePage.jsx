import React from "react";
import CommitteeMemberCard from "../components/CommitteeMemberCard";
import AdiChedda from "/assets/images/committee/AdiChedda.webp";
import AdityaHaria from "/assets/images/committee/AdityaHaria.webp";
import ApoorviBhatiya from "/assets/images/committee/ApoorviBhatiya.webp";
import BhumiShah from "/assets/images/committee/BhumiShah.webp";
import DarshJain from "/assets/images/committee/DarshJain.webp";
import DhruvAgarwal from "/assets/images/committee/DhruvAgarwal.webp";
import DivyMehta from "/assets/images/committee/DivyMehta.webp";
import FaruqDiddimani from "/assets/images/committee/FaruqDiddimani.webp";
import GauriKabra from "/assets/images/committee/GauriKabra.webp";
import GehnaTibb from "/assets/images/committee/GehnaTibb.webp";
import HardiPurohit from "/assets/images/committee/HardiPurohit.webp";
import HasnainAgharia from "/assets/images/committee/HasnainAgharia.webp";
import IshanayaGhia from "/assets/images/committee/IshanayaGhia.webp";
import JainamShah from "/assets/images/committee/JainamShah.webp";
import KanishkSurana from "/assets/images/committee/KanishkSurana.webp";
import KrishGala from "/assets/images/committee/KrishGala.webp";
import KrishVora from "/assets/images/committee/KrishVora.webp";
import LubhawaniSinghal from "/assets/images/committee/LubhawaniSinghal.webp";
import MayankSavankar from "/assets/images/committee/MayankSavankar.webp";
import MokshaThakkar from "/assets/images/committee/MokshaThakkar.webp";
import MuditAggarwal from "/assets/images/committee/MuditAggarwal.webp";
import NandiniVerat from "/assets/images/committee/NandiniVerat.webp";
import PehuMakharia from "/assets/images/committee/PehuMakharia.webp";
import PrathamChordiya from "/assets/images/committee/PrathamChordiya.webp";
import PrathamMaru from "/assets/images/committee/PrathamMaru.webp";
import PrathanaShetty from "/assets/images/committee/PrathanaShetty.webp";
import RaghavDrolia from "/assets/images/committee/RaghavDrolia.webp";
import RajGoradia from "/assets/images/committee/RajGoradia.webp";
import RiddhiBheda from "/assets/images/committee/RiddhiBheda.webp";
import RudrakshDave from "/assets/images/committee/RudrakshDave.webp";
import RudraTrivedi from "/assets/images/committee/RudraTrivedi.webp";
import SanskritiM from "/assets/images/committee/SanskritiM.webp";
import ShreshthKoolwal from "/assets/images/committee/ShreshthKoolwal.webp";
import ShrishtiGupta from "/assets/images/committee/ShrishtiGupta.webp";
import SoumyaPattnaik from "/assets/images/committee/SoumyaPattnaik.webp";
import SunidhiYadav from "/assets/images/committee/SunidhiYadav.webp";
import UrjaSeth from "/assets/images/committee/UrjaSeth.webp";
import VeeralJain from "/assets/images/committee/VeeralJain.webp";
import ZainShah from "/assets/images/committee/ZainShah.webp";

function CommitteePage() {
  return (
    <>
    <div className='w-full min-h-screen bg-gradient-to-br from-fuchsia-900 to-violet-900'>
      <h1 className="font-seasons pt-10 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">
        CORE COMMITTEE
      </h1>

      <h1 className="font-seasons pt-8 text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        Top Core
      </h1>

      <div className="flex flex-wrap justify-center gap-20 mt-14 w-[95%] mx-auto pb-10">
        <CommitteeMemberCard
          designation="Chairperson"
          image={DhruvAgarwal}
          name="Dhruv Agarwal"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-20 mt-10 w-[95%] mx-auto">
        <CommitteeMemberCard
          designation="Deputy-Chairperson"
          image={BhumiShah}
          name="Bhumi Shah"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-20 mt-14 w-[95%] mx-auto pb-10">
        <CommitteeMemberCard
          designation="Vice-Chairperson"
          image={GehnaTibb}
          name="Gehna Tibb"
        />
        <CommitteeMemberCard
          designation="Vice-Chairperson"
          image={RudraTrivedi}
          name="Rudra Trivedi"
        />
        <CommitteeMemberCard
          designation="Vice-Chairperson"
          image={KrishVora}
          name="Krish Vora"
        />
        <CommitteeMemberCard
          designation="Vice-Chairperson"
          image={DarshJain}
          name="Darsh Jain"
        />
      </div>

      <h1 className="font-seasons pt-20 text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
        Core
      </h1>

      <div className="flex flex-wrap justify-center gap-20 mt-14 w-[95%] mx-auto pb-10">
        <CommitteeMemberCard
          designation="Marketing"
          image={HasnainAgharia}
          name="Hasnain Agharia"
          phone="9619074161"
        />
        <CommitteeMemberCard
          designation="Marketing"
          image={ApoorviBhatiya}
          name="Apoorvi Bhatiya"
          phone="9826023903"
        />
        <CommitteeMemberCard
          designation="Marketing"
          image={SoumyaPattnaik}
          name="Soumya Pattnaik"
          phone="8861849596"
        />
        <CommitteeMemberCard
          designation="Finance"
          image={RajGoradia}
          name="Raj Goradia"
          phone="9820555132"
        />
        <CommitteeMemberCard
          designation="Artist Relations"
          image={MayankSavankar}
          name="Mayank Savankar"
          phone="9923005261"
        />
        <CommitteeMemberCard
          designation="Artist Relations"
          image={RiddhiBheda}
          name="Riddhi Bheda"
          phone="9167122116"
        />
        <CommitteeMemberCard
          designation="Digital Media"
          image={PrathamMaru}
          name="Pratham Maru"
          phone="9820095729"
        />
        <CommitteeMemberCard
          designation="Artist Relations"
          image={MokshaThakkar}
          name="Moksha Thakkar"
          phone="9869633123"
        />
        <CommitteeMemberCard
          designation="Graphics"
          image={SunidhiYadav}
          name="Sunidhi Yadav"
          phone="8828065975"
        />
        <CommitteeMemberCard
          designation="Graphics"
          image={PehuMakharia}
          name="Pehu Makharia"
          phone="9352141516"
        />
        <CommitteeMemberCard
          designation="Literary Arts"
          image={NandiniVerat}
          name="Nandini Verat"
          phone="8850375571"
        />
        <CommitteeMemberCard
          designation="Literary Arts"
          image={SanskritiM}
          name="Sanskriti Maheshwari"
          phone="7976016530"
        />
        <CommitteeMemberCard
          designation="Creative Arts"
          image={UrjaSeth}
          name="Urja Sheth"
          phone="9137396966"
        />
        <CommitteeMemberCard
          designation="Technnicals"
          image={ShreshthKoolwal}
          name="Shreshth Koolwal"
          phone="8875762015"
        />
        <CommitteeMemberCard
          designation="Logistics"
          image={RudrakshDave}
          name="Rudraksh Dave"
          phone="9769097906"
        />
        <CommitteeMemberCard
          designation="Logistics"
          image={LubhawaniSinghal}
          name="Lubhawani Singhal"
          phone="9414100974"
        />
        <CommitteeMemberCard
          designation="Gaming & Sports"
          image={ZainShah}
          name="Zain Shah"
          phone="9137720045"
        />
        <CommitteeMemberCard
          designation="Gaming & Sports"
          image={RaghavDrolia}
          name="Raghav Drolia"
          phone="8120804000"
        />
        <CommitteeMemberCard
          designation="Performing Arts"
          image={GauriKabra}
          name="Gauri Kabra"
          phone="9179488341"
        />
        <CommitteeMemberCard
          designation="Performing Arts"
          image={IshanayaGhia}
          name="Ishanaya Ghia"
          phone="7400475387"
        />
        <CommitteeMemberCard
          designation="Photography"
          image={HardiPurohit}
          name="Hardi Purohit"
          phone="9326008194"
        />
        <CommitteeMemberCard
          designation="Photography"
          image={AdityaHaria}
          name="Aditya Haria"
          phone="7977785987"
        />
        <CommitteeMemberCard
          designation="Security"
          image={AdiChedda}
          name="Adi Chedda"
          phone="9819975840"
        />
        <CommitteeMemberCard
          designation="Security"
          image={KanishkSurana}
          name="Kanishk Surana"
          phone="7005629072"
        />
        <CommitteeMemberCard
          designation="Informals"
          image={FaruqDiddimani}
          name="Faruq Diddimani"
          phone="9833204688"
        />
        <CommitteeMemberCard
          designation="Bussiness Events"
          image={VeeralJain}
          name="Veeral Jain"
          phone="9586459718"
        />
        <CommitteeMemberCard
          designation="Branding Supplies"
          image={JainamShah}
          name="Jainam Shah"
          phone="9969926444"
        />
        <CommitteeMemberCard
          designation="Branding Supplies"
          image={KrishGala}
          name="Krish Gala"
          phone="8104244956"
        />
        <CommitteeMemberCard
          designation="Public Relations"
          image={PrathamChordiya}
          name="Pratham Choradiya"
          phone="8275007093"
        />
        <CommitteeMemberCard
          designation="Public Relations"
          image={PrathanaShetty}
          name="Prathana Shetty"
          phone="9769731353"
        />
        <CommitteeMemberCard
          designation="Hospitality"
          image={MuditAggarwal}
          name="Muddit Aggarwal"
          phone="8288831787"
        />
        <CommitteeMemberCard
          designation="Hospitality"
          image={ShrishtiGupta}
          name="Shrishti Gupta"
          phone="7045996561"
        />
        <CommitteeMemberCard
          designation="Productions"
          image={DivyMehta}
          name="Divy Mehta"
          phone="9323787400"
        />
      </div>
    </div>
    </>
  );
}

export default CommitteePage;
