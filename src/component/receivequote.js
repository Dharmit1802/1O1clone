import React from "react";

function ReceiveQuote() {
  return (
    <div className="w-3/4 py-4 px-4 mx-auto ">
      <div className="flex flex-row items-center">
        <div className="relative w-[38%] h-auto rounded-2xl">
          <img
            className="w-[95%] z-20 h-auto"
            src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/landing_page/user/receive-quotations.png"
            alt="find artist mobile screenshot"
          />
        </div>
        <div className="w-[65%] pl-8">
          <h1 className="text-white font-bold text-6xl mb-6 leading-relaxed">
          RECEIVE QUOTATIONS
          </h1>
          <p className="text-white opacity-50 text-2xl leading-loose">
          The Artist Will Respond To Your Inquiry With A Personalized Quotation For Your Event. You Can Review The Details And Costs, And If It's The Perfect Fit For You, Go Ahead And Book The Artist With Confidence, Knowing You've Secured The Best Entertainment For Your Event. It's A Simple Process That Guarantees A Successful Event!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReceiveQuote;
