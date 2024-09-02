import React from 'react';
import FeaturedArtist from "./featuredArtist";
import TrendingArtist from "./trendingartist";
import CountUp from 'react-countup';

function Homevideo() {
  return (
    <>
    <div className="pt-5 bg-black mx-auto bg-opacity-70 md:hidden rounded-full w-[75%] h-fit py-8 px-10 justify-evenly gap-x-5 text-white font-semibold flex flex-row text-3xl ">
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="flex items-end">
              <CountUp end={15000} duration={5} separator="," />
                <span className="text-2xl ml-1">+</span>
              </div>
              <p className="text-xl opacity-70">bookings</p>
            </div>
            <div className="border-l-2 border-r-2 border-slate-600 border-opacity-50 px-5 flex flex-col justify-center items-center gap-3">
              <div className="flex items-end">
              <CountUp end={10000} duration={5} separator="," />
                <span className="text-2xl ml-1">+</span>
              </div>
              <p className="text-xl opacity-70">Live Entertainers</p>
            </div>
            <div className="flex flex-col justify-center items-center px-2 gap-3">
              <div className="flex items-end">
              <CountUp end={50} duration={5} separator="," />
                <span className="text-2xl ml-1">+</span>
              </div>
              <p className="text-xl opacity-70">Cities</p>
            </div>
          </div>
    <div className='p-8 md:p-16 pl-14 md:pl-40 pr-14 md:pr-40'>

        <div className="w-[100%]  p-8 bg-[#102439] rounded-xl h-[55vh] md:h-[80vh]">
          <iframe
            frameborder="0"
            allowfullscreen=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            title="Elevate your next event to unforgettable heights with Live101!"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nFyS2XDclf8?autoplay=0&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Fwww.live101.in&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
            id="widget2"
            className='rounded-xl border-none'
          ></iframe>
        </div>
    
        <div>
          <FeaturedArtist />
        </div>
    </div>
    <div className="bg-slate-800 w-full relative z-20 overflow-hidden">
       <TrendingArtist />
    </div>
    </>
  )
}

export default Homevideo;