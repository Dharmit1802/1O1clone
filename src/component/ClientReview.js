import React from 'react'

function ClientReview() {

    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

  return (
    <div>
        <p>Client Review</p>
        <p>Clients Love Us, You Will Too</p>
        <div className="w-full mt-6 gap-5">
        <Slider {...settings}>
          <div className="px-4">
            <div className="bg-slate-900 rounded-3xl overflow-hidden relative">
              <img alt="surprise party" src={SurpriseParty} className="w-full h-[320px] object-cover"></img>
              <div className="p-6 pb-8 text-white flex flex-col justify-center gap-3 items-center">
                <p className="tracking-tight text-xl font-semibold">LIVE MUSIC SURPRISE PARTY</p>
                <button className="mt-2 w-full bg-white text-red-600 font-bold text-xl px-4 py-4 rounded-3xl">Starting at 4999</button>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full bg-slate-500 opacity-5 blur-[2px]"></div>
              <div className="absolute -bottom-[66px] left-1/2 transform -translate-x-1/2 translate-y-1/3 w-44 h-24 rounded-full bg-white blur-sm"></div>

            </div>
          </div>
          <div className="px-4">
            <div className="bg-slate-900 rounded-3xl overflow-hidden relative">
              <img alt="house party" src={Houseparty} className="w-full h-[320px] object-cover"></img>
              <div className="p-6 pb-8 text-white flex flex-col justify-center gap-3 items-center">
                <p className="tracking-tight text-xl font-semibold">HOUSE PARTY PACKAGE</p>
                <button className="mt-2 w-full bg-white text-red-600 font-bold text-xl px-4 py-4 rounded-3xl">Starting at 9999</button>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full bg-slate-500 opacity-5 blur-[2px]"></div>
              <div className="absolute -bottom-[66px] left-1/2 transform -translate-x-1/2 translate-y-1/3 w-44 h-24 rounded-full bg-white blur-sm"></div>

            </div>
          </div>
          <div className="px-4">
            <div className="bg-slate-900 rounded-3xl overflow-hidden relative">
              <img alt="birthday party" src={Birthday} className="w-full h-[320px] object-cover"></img>
              <div className="p-6 pb-8 text-white flex flex-col justify-center gap-3 items-center">
                <p className="tracking-tight text-xl font-semibold">KIDS BIRTHDAY PACKAGE</p>
                <button className="mt-2 w-full bg-white text-red-600 font-bold text-xl px-4 py-4 rounded-3xl">Starting at 4999</button>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full bg-slate-500 opacity-5 blur-[2px]"></div>
              <div className="absolute -bottom-[66px] left-1/2 transform -translate-x-1/2 translate-y-1/3 w-44 h-24 rounded-full bg-white blur-sm"></div>

            </div>
          </div>
          {/* Add more items as needed */}
        </Slider>
      </div>
    </div>
  )
}

export default ClientReview