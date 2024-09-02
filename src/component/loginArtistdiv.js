import React from 'react'

function LoginArtist() {
  return (
    <div className='w-3/4 py-16 px-3 mx-auto '>
        <div className='flex flex-row items-center'>
        <div className='relative w-[48%] h-auto bg-slate-800 rounded-2xl'>
            <img src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/landing_page/user/find-artists.png" alt="find artist mobile screenshot"/>
        </div>
        <div className='w-[52%] pl-10'>
            <h1 className='text-white font-bold text-6xl leading-relaxed'>FIND ARTIST</h1>
            <p className='text-white opacity-50 text-2xl leading-loose'>With A Vast Selection Of Exceptional Talent Handpicked To Ensure Only The Best, Live101 Makes It Easy For You To Search, Filter, And Find The Perfect Artist To Elevate Your Event And Leave A Lasting Impression On Your Guests.</p>
        </div>
    </div>
    <div className='flex flex-row items-center mt-14'>
        <div className='w-[52%] pr-10'>
            <h1 className='text-white font-bold text-6xl mb-4 leading-relaxed'>ENQUIRE</h1>
            <p className='text-white opacity-50 text-2xl leading-loose'>"Book The Perfect Artist For Your Event With Live101'S Easy Enquiry Process. Simply Input Your Event Details, Select An Artist, And You're One Step Closer To Having Your Favorite Performer Bring The House Down!"</p>
        </div>
        <div className='relative w-[48%] h-auto bg-slate-800 rounded-2xl'>
            <img src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/landing_page/user/find-artists.png" alt="find artist mobile screenshot"/>
        </div>
    </div>
    </div>
  )
}

export default LoginArtist;