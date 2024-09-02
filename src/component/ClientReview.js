import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientdata } from "../data.js";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

function ClientReview() {
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
    dots: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  console.log(clientdata);

  return (
    
    <div className="pt-28 pd-14 flex flex-col justify-center items-center">
      <p className="text-5xl font-bold mb-3">Client Review</p>
      <p className="text-3xl font-bold opacity-80">
        Clients Love Us, You Will Too
      </p>
      <div className="w-[90%] mt-12 gap-5">
        <Slider {...settings}>
          {clientdata.map((item, index) => (
            <div key={index} className=" mx-auto">
              <div className="w-3/4 flex flex-row p-5 mx-auto justify-center h-[300px]">
                <div className="overflow-hidden">
                  <img className="object-cover rounded-3xl w-[100%] h-full" alt="review user" src={item.imageurl}/>
                </div>
                <div className="w-[1.5px] h-full ml-7 mr-7 relative overflow-hidden">
                  <div className="absolute top-[25%] shadow-3xl w-full h-1/2 bg-white"></div>
                </div>

                <div className="flex flex-col gap-3 justify-start w-[70%]">
                    <p className="text-3xl font-semibold">{item.name}</p>
                    <div className="">{item.rating}</div>
                    <p className="text-2xl text-white opacity-80">{item.review}</p>
                </div>
              </div>
            </div>              
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ClientReview;
