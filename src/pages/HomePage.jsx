import AnimatedVideo from "../../public/assets/AnimatedVideo.mp4";

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
    </div>
  );
}

export default HomePage;
