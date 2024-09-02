import React from 'react';
import {FaqData} from '../data';

function Faq() {

    const [activeIndex, setActiveIndex] = React.useState(null);

    const handleClick = (i) => {
        if(activeIndex === i){
            // console.log(activeIndex);
            return setActiveIndex(null);
        }
        setActiveIndex(i);
    }

  return (
    <div className='w-full bg-white'>
        <div className="w-3/4 flex flex-col justify-center items-center pt-20 pb-14 gap-10 mx-auto">
             <h1 className='text-slate-800 text-5xl font-bold'>Frequently Asked Questions</h1>
             <div className='w-[90%] mx-auto'>
             {FaqData.map((item, i) => (
                <div 
                    key={i} 
                    onClick={() => handleClick(i)} 
                    className={`relative bg-[#f1f1f1] border border-slate-900  ${i === 0 ? "rounded-t-2xl " : "border-t-0"} ${i === (FaqData.length - 1) ? "rounded-b-2xl" : ""} overflow-hidden`}
                >
                    <div className={`${activeIndex === i ? "bg-slate-900 text-white" : ""} px-8 py-6 text-2xl font-semibold cursor-pointer flex flex-row justify-between items-center`}>
                        {item.question}
                        <span>
                            {
                                activeIndex===i ?(<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="md" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>):(<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="md" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>)
                            }
                        </span>
                    </div>
                    <div className={`relative Faqtransition ${activeIndex === i ? "max-h-screen pl-8 py-7 pr-12" : "max-h-0 px-12 py-0"} overflow-hidden text-[20px] opacity-80`}>
                        {item.answer}
                    </div>
                </div>
            ))}
                
             </div>     
        </div>
    </div>
  )
}

export default Faq;