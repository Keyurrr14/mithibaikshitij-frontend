import SponsorComponent from "@/components/SponsorComponent";
import AnimatedVideo from "/assets/AnimatedVideo.mp4";
import PhoneVideo from "/assets/PhoneVideo.mp4";
import CarouselComponent from "@/components/CarouselComponent";
import { useState, useEffect } from "react";

function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-01-08T00:00:00');
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-screen min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover -mt-20 md:h-auto md:max-h-screen"
      >
        <source src={isMobile ? PhoneVideo : AnimatedVideo} type="video/mp4" />
      </video>
      <div className="w-[90%] md:w-[80%] lg:w-[80%] max-w-[1100px] mx-auto flex flex-col items-center justify-center">
        <h1 className="font-seasons pt-14 pb-14 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white [text-shadow:_2px_4px_0px_#000000]">
          The Arcade Ware<span className="font-sans">-</span>House
        </h1>

        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 items-start justify-between">
          <p className="text-white mb-5 md:mb-10 font-rubik text-sm sm:text-base md:text-lg lg:text-xl text-justify leading-relaxed md:w-[60%]">
            Get ready to step into a thrilling celebration where nostalgia
            collides with modern excitement, bringing classic games and
            electrifying music together like never before! <br />
            <br />
            Imagine stepping into a bright and colourful place filled with
            fascinating tunes, where vintage video games come to life! As you walk
            through, you'll find interactive areas that look just like your
            favourite arcade games, inviting you to jump in and play. This lively
            space turns into a musical paradise, where every note is celebrated.
            It's a place where the timeless melodies of the past blend seamlessly
            with the exciting beats of today, with each corner offering a new
            sound, a new adventure, where music becomes the language that unites
            generations and sparks your creativity, making you feel both joyful
            and inspired. <br />
            <br />
            In this magical environment, familiar tunes bring back happy memories
            while also sparking new feelings. We welcome you to "The Arcade
            Ware-House," where arcade games and great music blend perfectly. Every
            game you play and every song you hear fills the air with laughter and
            excitement, turning nostalgia into amazing adventures. Here, you're
            invited to relive those cherished moments while discovering something
            new and creating unforgettable experiences that will make you smile!{" "}
            <br />
            <br />
            Get ready to dive into a whirlwind of excitement! As you explore a
            world that blends the thrill of gaming and the magic of music, every
            moment will be an explosion of energy, a vibrant celebration of
            creativity, connection, and discovery. Whether you're reliving your
            favourite memories or creating brand-new ones, you will be fully
            immersed, eager to return again and again for more adventures, more
            music, and more fun than you ever imagined.
          </p>

          <a href="https://www.youtube.com/watch?v=Yop_-yMeOr8" target="_blank" className="md:w-[45%] md:-mr-20 flex justify-center">
            <img
              src="/assets/images/arcade-machine.png"
              alt="machine"
              className="w-full object-contain sticky top-24 max-sm:-mt-32 -mt-32"
            />
          </a>
        </div>

        <h1 className="font-seasons pt-10 pb-5 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white [text-shadow:_2px_4px_0px_#000000]">
          Countdown
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 mb-10 p-4 sm:p-6 bg-transparent rounded-xl backdrop-blur-sm">
          <div className="flex flex-col items-center p-2 sm:p-4 bg-transparent shadow-[rgba(17,17,26,0.4)_0px_8px_24px,_rgba(17,17,26,0.4)_0px_16px_56px,_rgba(17,17,26,0.4)_0px_24px_80px] rounded-lg w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 justify-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{timeLeft.days}</span>
            <span className="text-xs sm:text-sm text-white/80">Days</span>
          </div>
          <div className="flex flex-col items-center p-2 sm:p-4 bg-transparent shadow-[rgba(17,17,26,0.4)_0px_8px_24px,_rgba(17,17,26,0.4)_0px_16px_56px,_rgba(17,17,26,0.4)_0px_24px_80px] rounded-lg w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 justify-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{timeLeft.hours}</span>
            <span className="text-xs sm:text-sm text-white/80">Hours</span>
          </div>
          <div className="flex flex-col items-center p-2 sm:p-4 bg-transparent shadow-[rgba(17,17,26,0.4)_0px_8px_24px,_rgba(17,17,26,0.4)_0px_16px_56px,_rgba(17,17,26,0.4)_0px_24px_80px] rounded-lg w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 justify-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{timeLeft.minutes}</span>
            <span className="text-xs sm:text-sm text-white/80">Minutes</span>
          </div>
          <div className="flex flex-col items-center p-2 sm:p-4 bg-transparent shadow-[rgba(17,17,26,0.4)_0px_8px_24px,_rgba(17,17,26,0.4)_0px_16px_56px,_rgba(17,17,26,0.4)_0px_24px_80px] rounded-lg w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 justify-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{timeLeft.seconds}</span>
            <span className="text-xs sm:text-sm text-white/80">Seconds</span>
          </div>
        </div>
        <SponsorComponent />
        <CarouselComponent/>
      </div>
    </div>
  );
}

export default HomePage;
