import React from 'react';
import FeaturedArtist from "./featuredArtist";
import TrendingArtist from "./trendingartist";

function Homevideo() {
  return (
    <>
    <div className='p-16 pl-40 pr-40'>
        <div className='bg-slate-800 rounded-3xl p-10'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmi9tF-D4Sc8fcDXd-YkLt6yY6SnlpuCJo3Q&s' alt='video' className='w-full h-full object-cover rounded-lg'/>
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