import React from 'react'

function Place() {
  return (
    <div className='w-full py-16 bg-white'>
        <div className='w-[70%] flex flex-row mx-auto rounded-xl bg-[#fee]'>
            <div className='w-[41%] p-7'>
                <div className='bg-white h-[100%] flex rounded-xl flex-col justify-between p-7 -mr-2 location relative'>
                    <h1 className='text-red-600 text-4xl uppercase font-semibold mb-[120px]'>Delhi</h1>
                    <p className='font-medium text-2xl leading-relaxed s'>204,2nd Floor D-Mall, Netaji Subhash Place, Pitampura, New Delhi-110034. (India)</p>
                </div>
            </div>
            <div className='w-[59%] p-7'>
                <div className='bg-white h-[100%] flex rounded-xl flex-col justify-between p-7 -ml-4 location-mumbai relative'>
                    <h1 className='text-red-600 text-4xl uppercase font-semibold mb-[120px]'>mumbai</h1>
                    <p className='font-medium text-2xl leading-relaxed s'>7TH FLOOR B WING, Dhanashree Heights,BUILDING NO. 42, UNIT NO 705/706, AzadNagar, Off Veera Desai Road, Andheri (West), Mumbai - 400053. (India)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Place;