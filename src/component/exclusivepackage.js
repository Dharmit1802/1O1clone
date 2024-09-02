import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SurpriseParty from "../assets/Surpriseparty.jpg";
import Birthday from "../assets/birthdaypack.jpg";
import Houseparty from "../assets/HouseParty.jpg";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

function ExclusivePackage() {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "absolute z-10 top-1/2 left-0 transform -translate-y-1/2"
      }
    >
      <BsChevronCompactLeft className="text-white stroke-1 w-auto text-3xl md:hidden -ml-[30px]"/>
    </button>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "absolute z-10 top-1/2 right-0 transform -translate-y-1/2"
      }
    >
      <BsChevronCompactRight className="text-white stroke-1 w-auto text-3xl md:hidden -mr-[30px]"/>
    </button>
  );

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        prevArrow: <SlickArrowLeft className=""/>,
        nextArrow: <SlickArrowRight />,
        responsive: [
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            },
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
    };

  return (
    <div className="w-3/4 mx-auto pb-10">
      <div className="flex flex-row justify-between items-center text-white">
        <div className="flex flex-col gap-3">
          <p className="text-5xl font-semibold">Exclusive Packages</p>
          <p className="text-3xl opacity-80 font-normal">Curated Exclusively for You: Choose Your Perfect Package.</p>
        </div>
        <button className="capitalize bg-red-700 px-7 py-3 tracking-wide text-xl rounded-full font-normal">view all</button>
      </div>
      <div className="w-full mt-6 gap-5">
        <Slider {...settings}>
          <div className="px-4">
            <div className="bg-slate-900 rounded-3xl overflow-hidden relative">
              <img alt="surprise party" src={SurpriseParty} className="w-full h-[320px] object-cover"></img>
              <div className="p-6 pb-8 text-white flex flex-col justify-center gap-3 items-center">
                <p className="tracking-tight text-xl font-semibold">LIVE MUSIC SURPRISE PARTY</p>
                <button className="mt-2 w-full bg-white text-red-600 font-bold text-xl px-4 py-4 rounded-3xl">Starting at 4999</button>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full bg-slate-500 opacity-5 blur-[2px]"></div>
              <div className="absolute -bottom-[66px] left-1/2 transform -translate-x-1/2 translate-y-1/3 w-44 h-24 rounded-full bg-white blur-sm"></div>

            </div>
          </div>
          <div className="px-4">
            <div className="bg-slate-900 rounded-3xl overflow-hidden relative">
              <img alt="house party" src={Houseparty} className="w-full h-[320px] object-cover"></img>
              <div className="p-6 pb-8 text-white flex flex-col justify-center gap-3 items-center">
                <p className="tracking-tight text-xl font-semibold">HOUSE PARTY PACKAGE</p>
                <button className="mt-2 w-full bg-white text-red-600 font-bold text-xl px-4 py-4 rounded-3xl">Starting at 9999</button>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full bg-slate-500 opacity-5 blur-[2px]"></div>
              <div className="absolute -bottom-[66px] left-1/2 transform -translate-x-1/2 translate-y-1/3 w-44 h-24 rounded-full bg-white blur-sm"></div>

            </div>
          </div>
          <div className="px-4">
            <div className="bg-slate-900 rounded-3xl overflow-hidden relative">
              <img alt="birthday party" src={Birthday} className="w-full h-[320px] object-cover"></img>
              <div className="p-6 pb-8 text-white flex flex-col justify-center gap-3 items-center">
                <p className="tracking-tight text-xl font-semibold">KIDS BIRTHDAY PACKAGE</p>
                <button className="mt-2 w-full bg-white text-red-600 font-bold text-xl px-4 py-4 rounded-3xl">Starting at 4999</button>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full bg-slate-500 opacity-5 blur-[2px]"></div>
              <div className="absolute -bottom-[66px] left-1/2 transform -translate-x-1/2 translate-y-1/3 w-44 h-24 rounded-full bg-white blur-sm"></div>

            </div>
          </div>
          {/* Add more items as needed */}
        </Slider>
      </div>
    </div>
  );
}

export default ExclusivePackage;
