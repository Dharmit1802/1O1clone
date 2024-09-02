import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Ensure you have react-icons installed
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homevideo from "../component/homevideo";
import Bookevent from "../component/bookevent";
import ExclusivePackage from "../component/exclusivepackage";
import ChooseUs from "../component/chooseus";
import OurClients from "../component/Ourclient";
import Footer from "../component/footer";
import { artistData } from "../data.js";
import AnimatedNumber from "animated-number-react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

function Home() {
  const [currentSlide, setIndex] = useState(0);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "absolute z-10 top-1/2 left-0 transform -translate-y-1/2"
      }
    >
      <BsChevronCompactLeft className="text-white stroke-1 w-auto text-3xl -ml-[30px]"/>
    </button>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "absolute z-10 top-1/2 right-0 transform -translate-y-1/2"
      }
    >
      <BsChevronCompactRight className="text-white stroke-1 w-auto text-3xl -mr-[30px]"/>
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    centerPadding: "0", // ensures the centered item is fully visible,
    beforeChange: (current, next) => setIndex(next),
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-[100vw]  overflow-x-hidden">
      <div className="relative pt-32 flex flex-col h-[120vh] gap-[40px] md:gap-[100px]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmi9tF-D4Sc8fcDXd-YkLt6yY6SnlpuCJo3Q&s"
          alt="hero"
          className="absolute top-0 left-0 w-full h-[95vh] md:h-[120vh] object-cover blur-md -z-10 filter brightness-75"
        />

        <div className="relative md:w-[75%] w-[60%] mx-auto text-white gap-x-5 md:flex flex-row justify-between items-end max-w-full">
          <div className="md:w-[50%] flex flex-col gap-y-3 md:gap-y-4 max-w-full">
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Book Your Live Artist
            </p>
            <p className="text-3xl md:text-4xl font-medium tracking-wide -mt-2">
              Anywhere. Anytime. Any Budget
            </p>
            <div className="relative mt-2 md:mt-6 w-full">
              <FaSearch
                size="1.65rem"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                className="rounded-full outline-none w-full py-3 pl-14 pr-6 bg-slate-800 text-white border-none text-2xl font-normal focus:outline-none"
                placeholder="Find Your Artist Here..."
              />
            </div>
          </div>
          <div className="bg-black bg-opacity-70 hidden rounded-full w-[45%] h-fit py-8 px-10 justify-center gap-x-5 text-white font-semibold md:flex flex-row text-3xl max-w-full">
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="flex items-end">
                <AnimatedNumber
                  value={15000}
                  formatValue={(value) => value.toFixed(0)}
                  duration="2000"
                />+
              </div>
              <p className="text-xl opacity-70">bookings</p>
            </div>
            <div className="border-l-2 border-r-2 border-slate-600 border-opacity-50 px-5 flex flex-col justify-center items-center gap-3">
              <div className="flex items-end">
                <AnimatedNumber
                  value={10000}
                  formatValue={(value) => value.toFixed(0)}
                  duration="2000"
                />+
              </div>
              <p className="text-xl opacity-70">Live Entertainers</p>
            </div>
            <div className="flex flex-col justify-center items-center px-2 gap-3">
              <div className="flex items-end">
                <AnimatedNumber
                  value={50}
                  formatValue={(value) => value.toFixed(0)}
                  duration="2000"
                />+
              </div>
              <p className="text-xl opacity-70">Cities</p>
            </div>
          </div>
        </div>
        <div className="relative w-[75%] mx-auto flex flex-col justify-start items-start max-w-full">
          <div className="flex justify-start items-start mb-14 text-white max-w-full">
            <p className="font-bold text-3xl font-sans">
              Hire Top Artist from here...
            </p>
          </div>
          <div className="md:w-[90%] w-[100%] mx-auto max-w-full">
            {/* 75% width and centered */}
            <Slider {...settings}>
              {artistData.map((item, index) => (
                <div key={index} className="px-2 max-w-full">
                  <img
                    src={item.imgUrl}
                    alt={index}
                    className={`h-[250px] w-auto ${
                      currentSlide === index
                        ? "scale-110 brightness-125"
                        : "scale-75 brightness-75 hover:brightness-100"
                    } transition-transform duration-300 max-w-full`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="pt-8 -mt-3 md:-mt-6 pb-10 bg-slate-900">
        <Homevideo />
        <Bookevent />
      </div>
      <div className="bg-slate-800 pt-14">
        <ExclusivePackage />
      </div>
      <ChooseUs />
      <OurClients />
      <Footer />
    </div>
  );
}

export default Home;
