import AnimatedVideo from "/assets/AnimatedVideo.mp4";
import SponsorComponent from "../components/SponsorComponent.jsx";
import CarouselComponent from "../components/CarouselComponent.jsx";
function HomePage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-fuchsia-900 to-violet-900">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover -mt-20 md:h-auto md:max-h-screen"
      >
        <source src={AnimatedVideo} type="video/mp4" />
      </video>
      <SponsorComponent />
      <CarouselComponent />
    </div>
  );
}

export default HomePage;
