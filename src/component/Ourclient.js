import React from "react";
import { imgData } from "../data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

function OurClients() {
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "absolute z-10 top-1/2 left-0 transform -translate-y-1/2"
    }
  >
    <BsChevronCompactLeft className="text-red-700 stroke-1 w-auto text-3xl -ml-[30px]"/>
  </button>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "absolute z-10 top-1/2 right-0 transform -translate-y-1/2"
    }
  >
    <BsChevronCompactRight className="text-red-700 stroke-1 w-auto text-3xl -mr-[30px]"/>
  </button>
);

  const settings = {
    infinite: true,
    autoplay: true,
    
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    rows: 2,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="relative w-full image-wrapper bg-white">
     <div className="w-3/4 pt-10 mb-8 mx-auto ">
        
      <div className="text-black -mb-5">
        <p className="text-5xl font-bold">Our Clients</p>
        <p className="text-2xl opacity-70 mt-5 font-semibold">Client Success, Our Ultimate Reward.</p>
      </div>
      <div className="p-8">
        <Slider {...settings}>
          
          {imgData[0].src.map((artist, index) => (
              <div className="mt-8">
                <img
                  alt="surprise party"
                  src={artist}
                  className="rounded-xl h-[60px] w-auto mx-auto my-5 shadow-[0_0_13px_rgba(0,0,0,0.1)]"
                ></img>
              </div>
          ))}
          
        </Slider>
      </div>
    </div>
    </div>   
  );
}

export default OurClients;
