import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featuredArtist } from "../data";
import { MdVerified } from "react-icons/md";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

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

function TrendingArtist() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
       
    };
  return (
    <>
    <div className=" mt-5 p-16 pl-40 pr-40 z-50">
      <div className="flex flex-col gap-5">
        <p className="text-5xl text-white font-semibold">Trending Artists</p>
        <p className="text-3xl text-white opacity-80 font-normal">
        Premium Artists across the country
        </p>
      </div>
      <div className="w-[90%] mx-auto mt-10">
        <Slider {...settings}>
           {
            featuredArtist.map((artist,index) => (
                <div className="px-5" key={index}>
                    <div className="bg-slate-900 p-2 rounded-3xl overflow-hidden relative">
                      <div className="w-full h-[270px] pt-10 pr-7 pl-7">
                    <img alt="surprise party" src={artist.image} className="w-full h-full rounded-t-2xl object-contain bg-slate-800"></img>

                      </div>
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
      <div className="">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAEfBAMAAACe7EGfAAAAFVBMVEUAAAD9/f39/f3////////////+/v5Y7Ri0AAAAB3RSTlMABwULDxYTxPphpQAAAqxJREFUeNrt3UFP2zAYh/HU3Xau2+0eZ9q9wdudiYozCLhzAL7/R6CmIS11bKlR0/h1nkcCqnXQn/6KUKWQtiAiIiIiIqLOVDFmZQQmEV2UAtEszdIsHYylWToSSwtdeiER3RM2K04qjaWTRbM0x7TIpTmmg7E0S0di6fjSPdFq8Kef637oOWjQoEGDnjRaqeooY/RH7mutj1s1WWtXdndTe7l/Ms3tymuiS4MGDRq0EPTsLOgFaNCgx0eX/dCzyPd9G3Xp68iDL0CDBg0aNGjQoEEPgp6fBb2O3PfcD/1jVPS1RLTIpUFzTA+w9PC/p3M7PECDBg06D3R7Uvyq8jK66V4bHejnfx3I6F/tzcrr92mnyMtt1UFLV3vSvq6t34O1m0C3L6F7rP1nvept7cl+98DVYUqpfA8P0KAnib7rh/6e6tLzZNGRpedr0Bc6piWiWZqlWToBNEuz9B3PPUCDBg0aNGjQoEGDBg0aNGjQoIdBeyfsd9kb69We/37c3L597amjg7tf3MfmdfOZ/8P/1nrf8gBVZrM0aNCgQYMGDRo0aNCgQYMGDRo0f1mT8dIS0TL/WkwimqVZmqUTQLM0VxTldu1WulfJgQadPPr4kvb9deO2q4ftx6nXjd90XDdeu0/tdeOuZdXntLhSzcXvV+EL9PW90adfoa/Nn/Zm5xX6uwdWeR8eoEGDBu3QvOJVNmhexQ00aNCZvYIsr9ULGjRo0KBBgwY9tXeDSvZ9t0CDzg0t8p0oec9P0KBBTwatgmfG3de6643d7cruW7m8/9V8v/tseGd30CmhFxLRIpcGDVoiujj/b49Zqugiih6v+NKFQDRLszRLX6qSpYNxTLN0uDSWVsWYlbE7BaKVRLTIw4OlWZqlg7E0S0di6W0Sn3sQERERERFdoHeSbAlI8HpWrwAAAABJRU5ErkJggg==" className="absolute top-5 left-5 -z-10"></img>
      </div>
      <div>
        <img src="https://www.live101.in/static/media/premium-bg.b1168241.png" className="absolute bottom-20 left-0 -z-10 scale-150"></img>
      </div>
    </div>
    </>
  );
}

export default TrendingArtist;
