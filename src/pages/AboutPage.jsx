import React from "react";
import Kshitij from "/assets/images/Kshitij.webp";
import KshitijText from "/assets/images/KshtijText.webp";
import MithibaiCollege from "/assets/images/MithibaiCollege.webp";
import trophy from "/assets/images/trophy.webp";
import arcade from "/assets/images/arcade.webp";
import bag from "/assets/images/bag.webp";
import coin from "/assets/images/coin.webp";
import TV from "/assets/images/TV.webp";

function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-fuchsia-900 to-violet-900 relative">
      {/* Random Trophy Images */}
      <div className="hidden lg:block z-0">
        <img src={trophy} alt="Trophy" className="absolute w-16 h-16 top-[15%] left-[10%] opacity-50 rotate-12" />
        <img src={arcade} alt="Trophy" className="absolute w-20 h-20 top-[45%] right-[8%] opacity-50 -rotate-12" />
        <img src={bag} alt="Trophy" className="absolute w-14 h-14 bottom-[25%] left-[15%] opacity-50 rotate-45" />
        <img src={coin} alt="Trophy" className="absolute w-24 h-24 top-[65%] right-[20%] opacity-50 -rotate-6" />
        <img src={TV} alt="Trophy" className="absolute w-16 h-16 bottom-[10%] left-[40%] opacity-50 rotate-180" />
        <img src={trophy} alt="Trophy" className="absolute w-20 h-20 top-[30%] left-[25%] opacity-50 rotate-90" />
        <img src={arcade} alt="Trophy" className="absolute w-16 h-16 top-[80%] right-[35%] opacity-50 rotate-45" />
        <img src={bag} alt="Trophy" className="absolute w-18 h-18 top-[20%] right-[15%] opacity-50 -rotate-90" />
        <img src={coin} alt="Trophy" className="absolute w-20 h-20 bottom-[40%] right-[45%] opacity-50 rotate-180" />
        <img src={TV} alt="Trophy" className="absolute w-14 h-14 top-[50%] left-[30%] opacity-50 rotate-12" />
        <img src={trophy} alt="Trophy" className="absolute w-24 h-24 bottom-[15%] right-[12%] opacity-50 -rotate-45" />
        <img src={arcade} alt="Trophy" className="absolute w-16 h-16 top-[35%] left-[45%] opacity-50 rotate-90" />
        <img src={bag} alt="Trophy" className="absolute w-20 h-20 top-[5%] right-[30%] opacity-50 rotate-12" />
        <img src={coin} alt="Trophy" className="absolute w-16 h-16 top-[75%] left-[5%] opacity-50 -rotate-90" />
        <img src={TV} alt="Trophy" className="absolute w-18 h-18 top-[90%] right-[65%] opacity-50 rotate-45" />
        <img src={trophy} alt="Trophy" className="absolute w-14 h-14 bottom-[35%] left-[35%] opacity-50 -rotate-12" />
        <img src={arcade} alt="Trophy" className="absolute w-24 h-24 bottom-[5%] right-[40%] opacity-50 rotate-180" />
        <img src={bag} alt="Trophy" className="absolute w-16 h-16 top-[60%] left-[20%] opacity-50 rotate-90" />
      </div>

      <div className="hidden md:block lg:hidden z-0">
        <img src={trophy} alt="Trophy" className="absolute w-16 h-16 top-[15%] left-[10%] opacity-50 rotate-12" />
        <img src={arcade} alt="Trophy" className="absolute w-20 h-20 top-[45%] right-[8%] opacity-50 -rotate-12" />
        <img src={bag} alt="Trophy" className="absolute w-14 h-14 bottom-[25%] left-[15%] opacity-50 rotate-45" />
        <img src={coin} alt="Trophy" className="absolute w-24 h-24 top-[65%] right-[20%] opacity-50 -rotate-6" />
        <img src={TV} alt="Trophy" className="absolute w-16 h-16 bottom-[10%] left-[40%] opacity-50 rotate-180" />
        <img src={trophy} alt="Trophy" className="absolute w-20 h-20 top-[30%] left-[25%] opacity-50 rotate-90" />
        <img src={arcade} alt="Trophy" className="absolute w-16 h-16 top-[80%] right-[35%] opacity-50 rotate-45" />
        <img src={bag} alt="Trophy" className="absolute w-18 h-18 top-[20%] right-[15%] opacity-50 -rotate-90" />
        <img src={coin} alt="Trophy" className="absolute w-20 h-20 bottom-[40%] right-[45%] opacity-50 rotate-180" />
      </div>

      <div className="md:hidden z-0">
        <img src={trophy} alt="Trophy" className="absolute w-16 h-16 top-[15%] left-[10%] opacity-50 rotate-12" />
        <img src={arcade} alt="Trophy" className="absolute w-20 h-20 top-[45%] right-[8%] opacity-50 -rotate-12" />
        <img src={bag} alt="Trophy" className="absolute w-14 h-14 bottom-[25%] left-[15%] opacity-50 rotate-45" />
        <img src={coin} alt="Trophy" className="absolute w-24 h-24 top-[65%] right-[20%] opacity-50 -rotate-6" />
        <img src={TV} alt="Trophy" className="absolute w-16 h-16 bottom-[10%] left-[40%] opacity-50 rotate-180" />
      </div>
      
      <div className="flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 relative z-10">
        <div className="w-[90%] md:w-[80%] lg:w-[80%] max-w-[1100px]">
          <img
            src={MithibaiCollege}
            alt="Mithibai College"
            className="w-full h-auto rounded-lg mb-8"
          />
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-seasons font-bold mb-8">
            Mithibai College
          </h1>
          <p className="text-white font-rubik text-sm sm:text-base md:text-lg lg:text-xl text-justify leading-relaxed">
            Shri Vile Parle Kelavani Mandal's Mithibai College of Arts, Chauhan
            Institute of Science, and Amrutben Jivanlal College of Commerce and
            Economics (Autonomous) are envisaged as a destination for the most
            talented and promising students, and our courses cater to the need
            of several professions in the industry. <br />
            <br /> NAAC Re-accredited an 'A' Grade to the college (CGPA 3.57) in
            2016. Mithibai College was awarded Best College of the University of
            Mumbai for the academic year 2016-17. The college was also awarded
            4th place (AIR under college category), 3rd place (AIR under private
            autonomous colleges), and 2nd place (State Level Maharashtra under
            Private Autonomous college) by 'Education World 2023'. The efforts
            of the college have gained accolades as being 2nd ranker in Arts and
            Science Faculty and 3rd Ranker in Commerce Faculty in Mumbai by
            'OPEN Magazine' in 2023.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 relative z-10">
        <div className="w-[90%] md:w-[80%] lg:w-[80%] max-w-[1100px]">
          <img
            src={Kshitij}
            alt="Kshitij"
            className="w-full h-auto rounded-lg mb-8"
          />
          <img
            src={KshitijText}
            alt="Kshitij"
            className="h-12 sm:h-14 md:h-16 lg:h-20 mb-8"
          />
          <p className="text-white font-rubik text-sm sm:text-base md:text-lg lg:text-xl text-justify leading-relaxed">
            Kshitij the annual international intercollegiate cultural festival
            of Mithibai College, which has been soaring since 2007. Since then,
            it has led a 16-year-long legacy wherein each chapter is filled with
            enthralling stories. This year, the 17th edition of the festival
            will be a noteworthy addition to the next few pages of Kshitij's
            history. We have a committee of over 700 students who diligently
            work towards adding zest to this extravagant festival making it one
            of the biggest festivals in Asia.
            <br />
            <br /> The list of events this year sums up to a total of 45+ events
            over eight departments, providing a prodigious platform for all
            students nationwide. We are also the first-ever college festival to
            have introduced Para Events, where we host several events for the
            differently-abled. Igniting the city with its eternal flame, Kshitij
            garners more than 50,000 students from all over India. Adding to the
            festival's charm with top-notch celebrities gracing our venues, we
            have also been hosting 'The Kshitij Show'- the official talk show
            where influential artists let us peep into their lives behind the
            stardom.
            <br />
            <br /> With A-lister Pronite artists like Sunidhi Chauhan,
            Vishal-Shekhar, Farhan Akhtar, Mohit Chauhan, and King in the past
            years, Kshitij`23  aims to be much bigger and better, exceeding all
            expectations. Furthermore, participants also get cash prizes worth
            Rupees 3 Lakh & chance to win gifts worth Rupees 30 Lakhs and
            experience a cultural spectacle of a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
