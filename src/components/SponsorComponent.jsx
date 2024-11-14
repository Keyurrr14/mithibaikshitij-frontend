import React from "react";
import { SponsorMarquee } from "./ui/sponsor-marquee";
const sponsors = [
  {
    src: "/assets/images/sponsors/1.png",
  },
  {
    src: "/assets/images/sponsors/2.png",
  },
  {
    src: "/assets/images/sponsors/3.png",
  },
  {
    src: "/assets/images/sponsors/4.png",
  },
  {
    src: "/assets/images/sponsors/5.png",
  },
  {
    src: "/assets/images/sponsors/6.png",
  },
  {
    src: "/assets/images/sponsors/7.png",
  },
  {
    src: "/assets/images/sponsors/8.jpg",
  },
  {
    src: "/assets/images/sponsors/9.jpg",
  },
  {
    src: "/assets/images/sponsors/10.PNG",
  },
  {
    src: "/assets/images/sponsors/11.png",
  },
  {
    src: "/assets/images/sponsors/12.png",
  },
];

const SponsorComponent = () => {
  return (
    <div className="w-full flex-col my-10">
      <SponsorMarquee direction="right" pauseOnHover={false} items={sponsors} />
      <SponsorMarquee direction="left" pauseOnHover={false} items={sponsors} />
    </div>
  );
};

export default SponsorComponent;
