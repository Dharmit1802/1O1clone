import React from 'react';
import eventicon from '../assets/eventicon.png';
import partyicon from '../assets/partyicon.png';
import cafeicon from '../assets/cafeicon.png';
import hotelicon from '../assets/hotelicon.png';


function Bookevent() {
    const gradientStyle = {
        fontSize: '48px',
        background: 'linear-gradient(135deg, darkpink, darkred)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
    
  return (
    <div className='pt-10 w-3/4 mx-auto'>
        <div className='text-white flex flex-row justify-between items-center mb-12'>
            <p className='text-5xl font-semibold'>Book For Any Event</p>
            <button className="capitalize bg-red-700 px-7 py-3 tracking-wide text-xl rounded-full font-normal">view all</button>
        </div>
        <div className='w-full flex flex-row justify-between'>
            <div className='w-[15rem] rounded-3xl gap-10 pl-8 pr-8 pb-8 pt-10 bg-slate-800 flex flex-col justify-evenly items-center'>
                <div className='w-[8rem] h-[8rem] flex justify-center items-center rounded-full bg-slate-900'>
                <img width="96" height="96" src={eventicon} alt="event-accepted"/>
                </div>
                <div className='text-white text-xl font-semibold tracking-wide'>
                    PRIVATE EVENT
                </div>
            </div>
            <div className='w-[15rem] rounded-3xl gap-10 pl-8 pr-8 pb-8 pt-10 bg-slate-800 flex flex-col justify-evenly items-center'>
                <div className='w-[8rem] h-[8rem] flex justify-center items-center rounded-full bg-slate-900'>
                <img width="96" height="96" src={partyicon} alt="event-accepted"/>

                </div>
                <div className='text-white text-xl font-semibold tracking-wide'>
                    HOUSE PARTY
                </div>
            </div>
            <div className='w-[15rem] rounded-3xl gap-10 pl-7 pr-7 pb-8 pt-10 bg-slate-800 flex flex-col justify-evenly items-center'>
                <div className='w-[8rem] h-[8rem] flex justify-center items-center rounded-full bg-slate-900'>
                <img width="96" height="96" src={cafeicon} alt="event-accepted"/>

                </div>
                <div className='text-white text-xl font-semibold tracking-wide'>
                    CAFES & LOUNGES
                </div>
            </div>
            <div className='w-[15rem] rounded-3xl gap-10 pl-7 pr-7 pb-8 pt-10 bg-slate-800 flex flex-col justify-evenly items-center'>
                <div className='w-[8rem] h-[8rem] flex justify-center items-center rounded-full bg-slate-900'>
                <img width="96" height="96" src={hotelicon} alt="event-accepted"/>

                </div>
                <div className='text-white text-xl font-semibold tracking-wide'>
                    HOTELS & VILLAS
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bookevent;