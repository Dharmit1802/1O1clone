import React from 'react';
import FastBooking from "../assets/FB.png";
import NHC from "../assets/NPC.png";
import AM from "../assets/AM.png";
import SPG from "../assets/SPG.png";
import LMB from "../assets/LMC.png";
import EC from "../assets/EC.png";
import ClientReview from './ClientReview';  

function ChooseUs() {
  return (
    <div>
    <div className='relative bg-slate-900 w-full pt-10 pb-24'>
        <div className='w-3/4 mx-auto text-white'>
            <a href='#' className='w-full block text-center rounded-md mb-10 md:mb-14 bg-red-700 font-bold text-md md:text-xl py-5'>A Complete Guide For Using The Live1O1 App - Watch The Videos</a>
            <p className='text-5xl font-bold mb-10 md:mb-14 '>Why Choose Live1O1</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-7">
                <div className=''>
                    <img src={FastBooking} className='h-16 md:h-20 md:mb-1 object-contain'></img>
                    <p className='text-2xl md:text-4xl font-semibold'>Fast Booking</p>
                    <p className='text-lg md:text-2xl mt-2 font-normal md:leading-[35px] opacity-90'>Experience the most secure way to find and book the perfect entertainer for any event, occasion, or celebration through Live101. Our platform ensures a seamless and fast booking process, providing you with peace of mind.
                    </p>
                </div>

                <div className="">
                    <img src={NHC} className='h-16 md:h-20 md:mb-1 object-contain'></img>
                    <p className='text-2xl md:text-4xl font-semibold'>No Hidden Charges</p>
                    <p className='text-lg md:text-2xl mt-2 font-normal md:leading-[35px] opacity-90'>Transparency is our priority, which is why Live101 has no hidden fees. You can utilize our platform without worrying about additional charges. We believe in providing a straightforward and honest booking process.
                    </p>
                </div>

                <div className=''>
                    <img src={AM} className='h-16 md:h-20 md:mb-1 object-contain'></img>
                    <p className='text-2xl md:text-4xl font-semibold'>Artist Management</p>
                    <p className='text-lg md:text-2xl mt-2 font-normal md:leading-[35px] opacity-90'>From booking to performance, we ensure we meet all your expectations. Complaints have no place at Live101, Our dedicated team handles artist coordination and Management for a seamless experience.
                    </p>
                </div>

                <div className=''>
                    <img src={SPG} className='h-16 md:h-20 md:mb-1 object-contain'></img>
                    <p className='text-2xl md:text-4xl font-semibold'>Secure Payment Gateway</p>
                    <p className='text-lg md:text-2xl mt-2 font-normal md:leading-[35px] opacity-90'>At Live101, we prioritize your security. Book with confidence, knowing that our secure payment gateways prioritize the protection of your financial transactions. your information remains secure throughout the process, allowing you to enjoy your event stress-free
                    </p>
                </div>

                <div className=''>
                    <img src={LMB} className='h-16 md:h-20 md:mb-1 object-contain'></img>
                    <p className='text-2xl md:text-4xl font-semibold'>Last-Minute Backups</p>
                    <p className='text-lg md:text-2xl mt-2 font-normal md:leading-[35px] opacity-90'>"The show must always go on." Live101 guarantees efficient last-minute backup options, providing you with peace of mind and a delightful celebration without any cancellations or interruptions. Count on us to handle any unexpected changes seamlessly.
                    </p>
                </div>

                <div className=''>
                    <img src={EC} className='h-16 md:h-20 md:mb-1 object-contain'></img>
                    <p className='text-2xl md:text-4xl font-semibold'>Easy Cancellation</p>
                    <p className='text-lg md:text-2xl mt-2 font-normal md:leading-[35px] opacity-90'>We understand that plans can change, and your comfort is important to us. Live101 has a simple cancellation policy in place, allowing you to make adjustments to your event with minimal trouble. Enjoy the flexibility and convenience of hassle-free cancellations
                    </p>
                </div>
                
            </div>

        <ClientReview/>
        </div>
        
    </div>
    
    </div>
  )
}

export default ChooseUs;