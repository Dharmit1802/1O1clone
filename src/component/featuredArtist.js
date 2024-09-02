import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featuredArtist } from "../data";
import { MdVerified } from "react-icons/md";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

function FeaturedArtist() {
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "absolute z-10 -top-[20%] md:top-1/2 right-[50px] md:left-0 transform -translate-y-1/2"
    }
  >
    <BsChevronCompactLeft className="text-white stroke-1 w-auto text-3xl -ml-[30px]"/>
  </button>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "absolute z-10 -top-[20%] md:top-1/2 right-[40px] md:right-0 transform -translate-y-1/2"
    }
  >
    <BsChevronCompactRight className="text-white stroke-1 w-auto md:bg-transparent bg-red-700 p-1 rounded-full md:p-0 text-3xl -mr-[30px]"/>
  </button>
);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };
  return (
    <div className="mt-8 md:mt-16">
      <div className="flex flex-col gap-3">
        <p className="text-3xl md:text-5xl text-white font-semibold">Featured Live Artists</p>
        <p className="text-xl md:text-3xl text-white opacity-80 font-normal">
        Most reviewed artists
        </p>
      </div>
      <div className="w-[100%] mt-6 mx-auto">
        <Slider {...settings}>
           {
            featuredArtist.map((artist,index) => (
                <div className="px-4 md:px-6" key={index}>
                    <div className="bg-slate-800 p-2 rounded-3xl overflow-hidden relative">
                    <img alt="surprise party" src={artist.image} className="w-full rounded-t-2xl h-[200px] md:h-[250px] object-contain bg-slate-900"></img>
                    <div className="p-3 md:p-6 text-white flex flex-col justify-between gap-3 items-start">
                        <p className="tracking-tight text-xl md:text-2xl font-semibold flex flex-row justify-center items-center">{artist.name} <span className="ml-2 md:ml-3"><MdVerified color="red" className="text-[1rem] md:text-[1.7rem]"/></span></p>
                        <p className="text-md md:text-lg font-semibold opacity-80">{artist.role}, {artist.location}</p>
                    </div>
                    </div>
                </div>
                ))
           } 
          
        </Slider>
      </div>
    </div>
  );
}

export default FeaturedArtist;
