import { MdOutlineSchool, MdSolarPower } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import Carousel from "../ui/carousel";
import {
  carousel_battery,
  carousel_inverter,
  carousel_solar,
} from "@/utils/images";
import { GiPowerGenerator } from "react-icons/gi";
import { FaCarBattery } from "react-icons/fa";

const carouselItems = [
  {
    title: "Solar Panels",
    description:
      "Durable and efficient panels designed to capture maximum energy output, ensuring reliable performance, sustainable power generation, and long-term savings for every environment.",
    image: carousel_solar,
    color: "bg-secondary-bg",
    textColor: "text-primary-vividBlue",
    icon: <MdSolarPower size={34} color="#005BB5" />,
  },
  {
    title: "Inverters",
    description:
      "Reliable power conversion technology that ensures seamless energy use, delivering consistent performance, optimized efficiency, and uninterrupted access to clean electricity for every need.",
    image: carousel_inverter,
    color: "bg-secondary-bg",
    textColor: "text-secondary-mutedPurple",
    icon: <GiPowerGenerator  size={34} color="#005BB5" />,
  },
  {
    title: "Batteries",
    description:
      "Energy storage solutions tailored for all-day power, providing dependable capacity, efficient distribution, and uninterrupted access to electricity that adapts to both daily demands and long-term needs.",
    image: carousel_battery,
    color: "bg-secondary-bg",
    textColor: "text-primary-energeticYellow",
    icon: <FaCarBattery size={34} color="#005BB5" />,
  },
];

const Solution = () => {
  return (
    <>
      <section
        className="mx-auto px-4 py-16 md:pt-10 md:pb-5 text-center bg-primary-bg/40"
        id="about-us"
      >
        <div className="p-5">
          <h1 className="font-extralight text-[26px] md:text-3xl lg:text-5xl text-neutral-darkCharcoal leading-tight mb-4 max-w-5xl mx-auto">
            Find the Right Solar Solution for Your Needs
          </h1>
          <p className="font-extralight text-base md:text-xl mb-4 max-w-4xl mx-auto leading-relaxed">
            Our products are designed to meet a variety of needs, whether you’re
            powering a small home or a large business.
          </p>
        </div>
        <Carousel items={carouselItems} />
      </section>
    </>
  );
};

export default Solution;
