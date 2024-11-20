import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { FaPlayCircle } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IoMdShuffle } from "react-icons/io";
import { useState } from "react";

const imagesData = [
  {
    name: "KK",
    year: "Kshitij `21",
    img: "/assets/images/carousel2/kk.png",
    time: "1:36 / 4:45",
    bg: 'bg-[#c7443a]'
  },
  {
    name: "Amit Trivedi",
    year: "Kshitij `23",
    img: "/assets/images/carousel2/amit.png",
    time: "3:36 / 4:45",
    bg: 'bg-[#141213]'
  },
  {
    name: "Yellow Diary",
    year: "Kshitij `23",
    img: "/assets/images/carousel2/tyd.png",
    time: "2:46 / 4:45",
    bg: 'bg-[#6FB8D5]'
  },
  {
    name: "Javed Ali",
    year: "Kshitij `22",
    img: "/assets/images/carousel2/javedali.png",
    time: "2:14 / 3:36",
    bg: 'bg-[#62A24D]'
  },
  {
    name: "King",
    year: "Kshitij `22",
    img: "/assets/images/carousel2/king.png",
    time: "1:27 / 4:29",
    bg: 'bg-[#752253]'
  },
  {
    name: "Sachin",
    year: "Kshitij `23",
    img: "/assets/images/carousel2/sachin.png",
    time: "2:46 / 4:45",
    bg: 'bg-[#1b265e]'
  },
  {
    name: "Sunidhi Chauhan",
    year: "Kshitij `23",
    img: "/assets/images/carousel2/sunidhi.png",
    time: "2:46 / 4:45",
    bg: 'bg-[#d7cf35]'
  },
];

const CarouselComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const calculateProgress = (timeString) => {
        const [current, total] = timeString.split(' / ')
            .map(time => {
                const [min, sec] = time.split(':').map(Number);
                return min * 60 + sec;
            });
        return (current / total * 100).toFixed(0) + '%';
    };

    const handleMove = (splide) => {
        const currentIndex = splide.index;
        setActiveIndex(currentIndex);
    };

    return (
        <div className="w-full my-5 md:my-10">
            <div className="flex justify-center items-center">
                <Splide
                    onMove={handleMove}
                    aria-label="My Favorite Images"
                    className="w-[90vw] md:w-[1000px]"
                    options={{
                        type: "loop",
                        perPage: 3,
                        focus: 'center',
                        perMove: 1,
                        autoplay: true,
                        rewind: true,
                        gap: "1rem",
                        pagination: false,
                        arrows: true,
                        extensions: { AutoScroll },
                        autoScroll: {
                            speed: 10,
                            pauseOnHover: false,
                        },
                        breakpoints: {
                            1024: {
                                perPage: 2,
                            },
                            640: {
                                perPage: 1,
                            }
                        },
                    }}
                >
                    {imagesData.map((image, index) => (
                        <SplideSlide key={index}>
                            <div
                                className={`transition-transform duration-300 ease-linear ${index === activeIndex ? 'scale-100' : 'scale-90'}`}
                                style={{
                                    height: "500px",
                                    borderRadius: "10px",
                                    transformOrigin: "center",
                                }}
                            >
                            <div
                                className={`${image.bg} flex flex-col justify-evenly gap-3 h-full`}
                                style={{
                                    borderRadius: "10px",
                                }}
                            >
                                <div className="w-full flex-center">
                                    <img
                                        src={image.img}
                                        alt={image.name}
                                        className="object-contain w-56 h-56 md:w-72 md:h-72"
                                    />
                                </div>

                                <div className="flex flex-col gap-1 px-4 md:px-7">
                                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                                        {image.name}
                                    </h1>
                                    <p className="text-xs text-white">{image.year}</p>

                                    <div className="flex items-center justify-start w-full gap-3">
                                        <div className="relative flex-1 h-2 bg-white rounded-full">
                                            <div
                                                className="absolute top-0 left-0 h-full bg-gray-400 rounded-full"
                                                style={{ width: calculateProgress(image.time) }}
                                            />
                                            <div
                                                className="absolute w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded-full -top-[2px] md:-top-[4px]"
                                                style={{ left: calculateProgress(image.time), transform: 'translateX(-50%)' }}
                                            />
                                        </div>
                                        <FaPlayCircle className="text-white w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
                                    </div>

                                    <p className="text-xs text-white">{image.time}</p>

                                    <div className="flex w-full justify-start gap-2 mt-3">
                                        <div className="bg-white/30 text-white p-1.5 md:p-2 rounded-full">
                                            <BsFillSuitHeartFill size={16} />
                                        </div>
                                        <div className="bg-white/30 text-white p-1.5 md:p-2 rounded-full">
                                            <IoMdShuffle size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default CarouselComponent;
