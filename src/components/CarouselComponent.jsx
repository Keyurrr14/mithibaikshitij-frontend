import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { FaPlayCircle } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IoMdShuffle } from "react-icons/io";
const Images = [
  "/assets/images/carousel/kk.png",
  "/assets/images/carousel/sunidhi.png",
  "/assets/images/carousel/king.png",
  "/assets/images/carousel/javed.png",
  "/assets/images/carousel/sachin.png",
  "/assets/images/carousel/amit.png",
  "/assets/images/carousel/yellow.png",
];

const imagesData = [
  {
    name: "KK",
    year: "Kshitij `21",
    img: "/assets/images/carousel/kk.png",
    time: "1:36 / 4:45",
    bg: 'bg-red'
  },
  {
    name: "KKK",
    year: "Kshitij `22",
    img: "/assets/images/carousel/amit.png",
    time: "3:36 / 4:45",
    bg: 'bg-black'
  },
  {
    name: "KKkk",
    year: "Kshitij `23",
    img: "/assets/images/carousel/yellow.png",
    time: "2:46 / 4:45",
    bg: 'bg-yellow-500'
  },
  {
    name: "KKkk",
    year: "Kshitij `23",
    img: "/assets/images/carousel/yellow.png",
    time: "2:46 / 4:45",
    bg: 'bg-yellow-500'
  },
  {
    name: "KKkk",
    year: "Kshitij `23",
    img: "/assets/images/carousel/yellow.png",
    time: "2:46 / 4:45",
    bg: 'bg-yellow-500'
  },
  {
    name: "KKkk",
    year: "Kshitij `23",
    img: "/assets/images/carousel/yellow.png",
    time: "2:46 / 4:45",
    bg: 'bg-yellow-500'
  },
];

const CarouselComponent = () => {
  return (
    <div className="w-[100%] h-full my-10">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className=""
      >
        <Splide
          aria-label="My Favorite Images"
          className="w-[1000px]"
          options={{
            type: "loop",
            perPage: 3,
            autoplay: true,
            rewind: true,
            gap: "1rem",
            height: "100%",
            width: "100%",
            pagination: false,
            arrows: true,
            extensions: { AutoScroll },
            autoScroll: {
              speed: 10,
              pauseOnHover: false,
            },
          }}
        >
          {imagesData.map((image, index) => (
            <SplideSlide key={index} className={`${index === 1 && "scale-100"} my-auto transition-all`}>
              {/* <img src={image} alt={image} style={{ width: '100%', height: '100%', borderRadius:'10px', objectFit:'cover' }}
                            // className={`${index === 1 && 'scale-105' }`}

                        /> */}

              <div
                className={`${image.bg} flex flex-col justify-evenly gap-3`}
                style={{
                  height: `${index === 1 ? "600px" : "500px"}  `,
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              >
                <div className="w-full flex-center">
                  <img
                    src={image.img}
                    alt={image.name}
                    className="object-cover w-44 h-44"
                  />
                </div>

                <div className="flex flex-col gap-1 ml-7 ">
                  <h1 className="text-3xl font-bold text-white">
                    {image.name}
                  </h1>
                  <p className="text-xs text-white">{image.year}</p>

                  <div className="flex items-center justify-start w-full">
                    <div className="bg-white rounded-full h-2 mr-3 w-52 relative">
                      <div className="h-4 w-4 bg-gray-300 rounded-full absolute -top-[4px] left-20"></div>
                    </div>
                    <FaPlayCircle className="text-white" size={40} />
                  </div>

                  <p className="text-xs text-white">{image.time}</p>

                    <div className="flex w-full justify-start gap-2 mt-3">
                        <div className="bg-white/30 text-white p-2 rounded-full">
                            < BsFillSuitHeartFill />
                        </div>
                        <div className="bg-white/30 text-white p-2 rounded-full">
                             <IoMdShuffle />
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
