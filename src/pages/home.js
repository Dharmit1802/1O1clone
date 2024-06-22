import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Ensure you have react-icons installed
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homevideo from "../component/homevideo";
import Bookevent from "../component/bookevent";
import ExclusivePackage from "../component/exclusivepackage";
import ChooseUs from "../component/chooseus";

function Home() {
  const [currentSlide, setIndex] = useState();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0", // ensures the centered item is fully visible,
    beforeChange: (current, next) => setIndex(next),
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="pt-32 flex flex-col h-full gap-[100px]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmi9tF-D4Sc8fcDXd-YkLt6yY6SnlpuCJo3Q&s"
          alt="hero"
          className="absolute top-0 left-0 w-full h-full object-cover blur-md -z-10 filter brightness-75"
        />

        <div className="relative w-[75%] mx-auto text-white gap-x-5 flex flex-row justify-between items-end">
          <div className="w-[50%] flex flex-col gap-y-4">
            <p className="text-5xl font-extrabold tracking-tight">
              Book Your Live Artist
            </p>
            <p className="text-4xl font-medium tracking-wide -mt-2">
              Anywhere. Anytime. Any Budget
            </p>
            <div className="relative mt-6 w-[30rem]">
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
          <div className=" bg-slate-900 bg-opacity-80 rounded-full h-fit p-10 justify-center gap-x-5 text-white font-semibold flex flex-row text-3xl ">
            <div className="flex flex-col justify-center items-center gap-3">
              <p>15000+</p>
              <p className="text-xl opacity-70">bookings</p>
            </div>
            <div className="border-l-2 border-r-2 px-5 flex flex-col justify-center items-center gap-3">
              <p>10000+</p>
              <p className="text-xl opacity-70">Live Entertainers</p>
            </div>
            <div className="flex flex-col justify-center items-center px-2 gap-3">
              <p>50+</p>
              <p className="text-xl opacity-70">Cities</p>
            </div>
          </div>
        </div>
        <div className="relative w-[75%] mx-auto flex flex-col justify-start items-start">
          <div className="flex justify-start items-start mb-20 text-white">
            <p className="font-bold text-3xl font-sans">
              Hire Top Artist from here...
            </p>
          </div>
          <div className="w-full mx-auto customslider">
            
            {/* 75% width and centered */}
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className={`h-24 w-24 bg-black flex items-center justify-center ${
                    currentSlide === index ? "scale-110" : "scale-75"
                  } transition-transform duration-300 hover:bg-slate-700`}
                >
                  <h3>{item}</h3>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="-mt-6 pb-10 bg-slate-900">
        <Homevideo />
        <Bookevent />
      </div>
      <div className="bg-slate-800 pt-14">
        <ExclusivePackage />
      </div>
      <ChooseUs />
    </div>
  );
}

export default Home;
