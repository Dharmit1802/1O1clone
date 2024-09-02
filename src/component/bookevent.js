import React, { useState } from "react";
// import "./App.css";

function Bookevent() {
  const gradientStyle = {
    fontSize: "48px",
    background: "linear-gradient(135deg, darkpink, darkred)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const [hoverIndex, setHoverIndex] = useState(null);

  const events = [
    {
      title: "Private Event",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/private-event.jpg",
      normalIcon: (
        <img
          alt="private-event"
          title="private-event"
          className="w-32 text-white"
          src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/icons/private-event.png"
        />
      ),
      hoverIcon: (
        <img
          alt="Private Event"
          title="Private Event"
          className="w-32 text-white"
          src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/icons/private-event-white.png"
        />
      ),
    },
    {
      title: "House Party",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/house-party.jpg",
      normalIcon: (
        <img
          alt="private-event"
          title="private-event"
          className="w-32 text-white"
          src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/icons/house-party.png"
        />
      ),
      hoverIcon: (
        <img
          alt="Private Event"
          title="Private Event"
          className="w-32 text-white"
          src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/icons/house-party-white.png"
        />
      ),
    },
    {
      title: "Cafes & Lounges",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/cafe.jpg",
      normalIcon: (
        <img
          alt="private-event"
          title="private-event"
          className="w-32 text-white"
          src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/icons/cafe.png"
        />
      ),
      hoverIcon: (
        <img
          alt="Private Event"
          title="Private Event"
          className="w-32 text-white"
          src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/icons/cafe-white.png"
        />
      ),
    },
    {
      title: "Hotels & Villas",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/hotel.jpg",
      normalIcon: (
        <img
          alt="private-event"
          title="private-event"
          className="w-32 text-white"
          src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/icons/hotel.png"
        />
      ),
      hoverIcon: (
        <img
          alt="Private Event"
          title="Private Event"
          className="w-32 text-white"
          src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/icons/hotel-white.png"
        />
      ),
    },
  ];

  return (
    <div className="pt-10 w-3/4 mx-auto">
      <div className="text-white flex flex-row justify-between items-center mb-12">
        <p className="text-5xl font-semibold">Book For Any Event</p>
        <button className="capitalize bg-red-700 px-7 py-3 tracking-wide text-xl rounded-full font-normal">
          view all
        </button>
      </div>
      <div className="w-full flex flex-wrap md:flex-row justify-between">
        {events.map((event, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`relative w-[15rem] rounded-3xl gap-10 pl-8 pr-8 pb-8 pt-10 bg-slate-800 flex flex-col justify-evenly items-center z-10 transition duration-500 ease-in-out`}
          >
            <img
              src={event.imageUrl}
              className={`${
                hoverIndex === index ? "opacity-100" : "opacity-0"
              } w-full h-full -z-10  absolute top-0 left-0 rounded-3xl transition duration-500 ease-in-out`}
            ></img>

            <div
              className={`w-[8rem] h-[8rem] flex justify-center items-center rounded-full ${
                hoverIndex === index
                  ? "bg-slate-600 bg-opacity-70 backdrop-blur-sm"
                  : "bg-slate-800"
              } transition duration-500 ease-in-out`}
            >
              {hoverIndex === index ? event.hoverIcon : event.normalIcon}
            </div>
            <div className="text-white text-xl font-semibold tracking-wide">
              {event.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookevent;
