import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featuredArtist } from "../data";
import { MdVerified } from "react-icons/md";

function FeaturedArtist() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
    };
  return (
    <div className="mt-16">
      <div className="flex flex-col gap-3">
        <p className="text-5xl text-white font-semibold">Featured Live Artists</p>
        <p className="text-3xl text-white opacity-80 font-normal">
        Most reviewed artists
        </p>
      </div>
      <div className="w-full mt-6 gap-5">
        <Slider {...settings}>
           {
            featuredArtist.map((artist,index) => (
                <div className="px-6" key={index}>
                    <div className="bg-slate-800 p-2 rounded-3xl overflow-hidden relative">
                    <img alt="surprise party" src={artist.image} className="w-full rounded-t-2xl  h-[250px] object-contain bg-slate-900"></img>
                    <div className="p-6 text-white flex flex-col justify-between gap-3 items-start">
                        <p className="tracking-tight text-2xl font-semibold flex flex-row justify-center items-center">{artist.name} <span className="ml-3"><MdVerified color="red"  size="1.4rem"/></span></p>
                        <p className="text-lg font-semibold opacity-80">{artist.role}, {artist.location}</p>
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
