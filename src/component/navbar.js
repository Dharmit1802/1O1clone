import React, { useEffect, useState } from "react";
import image from "../assets/image.png";
import image2 from "../assets/live101_SSS.png";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [isActive, setIsActive] = useState(false);
  const [page,setPage] = useState("Home");

  // useEffect(() => {
  //   // Retrieve the stored page from localStorage when the component mounts
  //   const storedPage = localStorage.getItem("selectedPage");
  //   if (storedPage) {
  //     setPage(storedPage);
  //   }
  // }, []);

  const clickhandler = (event) => {
    const selectedPage = event.target.innerText;
    setPage(selectedPage);
    // localStorage.setItem("selectedPage", selectedPage); // Store the selected page in localStorage
  };
  return (
    <div className="md:px-24 px-5 z-10">
      <div className="flex md:mx-16 mx-0 flex-row justify-between items-center">
        <div>
          <img className=" h-[70px] md:h-[100px]" src={image} alt="101edu" />
        </div>
        <div className="hidden md:block">
        <ul className="flex font-sans flex-row gap-x-8 text-2xl list-none p-0 m-0">
    <li className="relative group">
      <NavLink to="/" className="no-underline text-white" onClick={clickhandler}>
        Home
      </NavLink>
      <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 ${page === "Home" ? "scale-x-100" :"group-hover:scale-x-100"} transition-transform duration-300 origin-bottom-left mt-6`}></span>
    </li>
    <li className="relative group">
      <NavLink to="user/login" className="no-underline text-white" onClick={clickhandler}>
        User Login
      </NavLink>
      <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 ${page === "User Login" ? "scale-x-100" :"group-hover:scale-x-100"} transition-transform duration-300 origin-bottom-left mt-6`}></span>
    </li>
    <li className="relative group">
      <NavLink to="contact-us" className="no-underline text-white" onClick={clickhandler}>
        Contact
      </NavLink>
      <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 ${page === "Contact" ? "scale-x-100" :"group-hover:scale-x-100"} transition-transform duration-300 origin-bottom-left mt-6`}></span>
    </li>
  </ul>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <button className="capitalize text-md md:text-2xl bg-red-700 font-bold text-white outline-none  rounded-full p-1 md:p-3 px-2 md:px-4">Instant Enquiry</button>
          <div className="text-white ">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <img className="hidden md:block md:h-[50px]" src={image2} alt="101edu" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
