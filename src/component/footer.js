import React from "react";
import logo1o1 from "../assets/image.png";

function Footer() {
  return (
    <div className="bg-slate-900 py-10 w-full">
    <div className="bgimage z-20 relative ">
      <div className="w-3/4 mx-auto">
        <div className="rounded-xl p-6 flex flex-row justify-between bg-slate-800">
          <div className="w-[30%] px-4 rounded-xl bg-slate-900 p-2 flex flex-col justify-evenly items-center text-white">
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative uppercase fond-semibold rounded-xl px-5 downarrow py-3 text-xl">
              Join the tribe
            </p>
            <p className="text-lg mt-5 uppercase font-semibold">follow us on</p>
            <div className="w-full grid grid-cols-4 gap-x-2 justify-evenly">
              <a
                className="p-3 rounded-xl bg-slate-800 flex items-center justify-center"
                href="https://instagram.com/live101.in?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  stroke="white"
                  fill="#E23F44"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a
                className="p-3 rounded-xl bg-slate-800 flex items-center justify-center"
                href="https://www.facebook.com/profile.php?id=100094144990517"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  stroke="white"
                  fill="#E23F44"
                  stroke-width="0"
                  viewBox="0 0 320 512"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <a
                className="p-3 rounded-xl bg-slate-800 flex items-center justify-center"
                href="https://www.linkedin.com/company/14456011/admin/feed/posts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedinIn"
              >
                <svg
                  stroke="white"
                  fill="#E23F44"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
              <a
                className="p-3 rounded-xl bg-slate-800 flex items-center justify-center"
                href="https://youtube.com/@live101in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <svg
                  stroke="white"
                  fill="#E23F44"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-[68%]">
            <img
              src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/home_page_component/joinus.webp"
              className="rounded-xl shadow-sm shadow-black"
              alt="footer"
            />
          </div>
        </div>

      </div>
    </div>
   
      <div className="w-3/4 mx-auto">
      <div className="mt-10 grid grid-cols-6 gap-7">
          <div className="col-span-1 p-3 z-20">
            <img src={logo1o1} className="h-32 p-3 w-32" />
          </div>
          <div className="col-span-1 p-2">
            <ul className="text-white flex flex-col gap-5">
              <li className="relative font-semibold text-xl bottomline w-fit mb-[8px]">
                Home
              </li>
              <li className="text-md tracking-wider opacity-80 ">
                Why Live1O1
              </li>
              <li className="text-md tracking-wider opacity-80 ">
                About Live1O1
              </li>
              <li className="text-md tracking-wider opacity-80 ">Contact us</li>
              <li className="text-md tracking-wider opacity-80 ">FAQ</li>
              <li className="text-md tracking-wider opacity-80 ">
                Our Clients
              </li>
              <li className="text-md tracking-wider opacity-80 ">
                Terms And Conditions
              </li>
              <li className="text-md tracking-wider opacity-80 ">Privacy</li>
              <li className="text-md tracking-wider opacity-80 ">
                Refund policy
              </li>
            </ul>
          </div>
          <div className="col-span-1 p-2">
            <ul className="text-white flex flex-col gap-5">
              <li className="relative font-semibold text-xl bottomline w-fit mb-[8px]">
                Events
              </li>
              <li className="text-md tracking-wider opacity-80 ">Wedding</li>
              <li className="text-md tracking-wider opacity-80 ">
                house Party
              </li>
              <li className="text-md tracking-wider opacity-80 ">birthday</li>
              <li className="text-md tracking-wider opacity-80 ">
                Anniversary
              </li>
              <li className="text-md tracking-wider opacity-80 ">Corporate</li>
              <li className="text-md tracking-wider opacity-80 ">
                Private Event
              </li>
              <li className="text-md tracking-wider opacity-80 ">cafe</li>
              <li className="text-md tracking-wider opacity-80 ">blogs</li>
            </ul>
          </div>
          <div className="col-span-1 p-2">
            <ul className="text-white flex flex-col gap-5">
              <li className="relative font-semibold text-xl bottomline w-fit mb-[8px]">
                Live Entertainers
              </li>
              <li className="text-md tracking-wider opacity-80 ">Singer</li>
              <li className="text-md tracking-wider opacity-80 ">DJs</li>
              <li className="text-md tracking-wider opacity-80 ">
                Music Bands
              </li>
              <li className="text-md tracking-wider opacity-80 ">Musician</li>
              <li className="text-md tracking-wider opacity-80 ">
                Anchor/Emcee
              </li>
              <li className="text-md tracking-wider opacity-80 ">
                Dance Groups
              </li>
              <li className="text-md tracking-wider opacity-80 ">Celebritis</li>
              <li className="text-md tracking-wider opacity-80 ">Newsletter</li>
            </ul>
          </div>
          <div className="col-span-2 p-2">
            <ul className="text-white flex flex-col gap-5">
              <li className="relative font-semibold text-xl bottomline w-fit mb-[8px]">
                Contact
              </li>
              <li className="text-md tracking-wider opacity-80 flex flex-row gap-2 items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                </svg>
                9999999999
              </li>
              <li className="text-md tracking-wider opacity-80 flex flex-row items-center gap-2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 12a2 2 0 1 0 4 0a9 9 0 1 0 -2.987 6.697"></path>
                  <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                </svg>
                info@live1O1.in
              </li>
              <li className="text-md tracking-wider opacity-80 flex flex-row items-start gap-2">
                <div className="mt-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke-width="2"
                      d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <a
                    href="https://www.google.com/maps/place/Dhanashree+Heights/@19.118678,72.842949,14z/data=!4m10!1m2!2m1!1sMumbai:+B+WING.7TH+FLOOR,+BUILDING+NO.+42,+unit+no.+501,+Dhanashree+Heights,+AzadNagar,+Off+Veera+Desai+Road,+Andheri+(West),+Mumbai+-+400053.+(India)!3m6!1s0x3be7b6265a3bc7ad:0x26c86e425777e010!8m2!3d19.1308015!4d72.8371884!15sCpYBTXVtYmFpOiBCIFdJTkcuOVRIIEZMT09SLCBCVUlMRElORyBOTy4gNDIsIHVuaXQgbm8uIDUwMSwgRGhhbmFzaHJlZSBIZWlnaHRzLCBBemFkTmFnYXIsIE9mZiBWZWVyYSBEZXNhaSBSb2FkLCBBbmRoZXJpIChXZXN0KSwgTXVtYmFpIC0gNDAwMDUzLiAoSW5kaWEpkgEPYnVzaW5lc3NfY2VudGVy4AEA!16s%2Fg%2F11b6xmnx3z?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mumbai: 7TH FLOOR B WING, Dhanashree Heights,BUILDING NO.
                    42, UNIT NO 705/706, AzadNagar, Off Veera Desai Road,
                    Andheri (West), Mumbai - 400053. (India)
                  </a>
                </div>
              </li>

              <li className="text-md tracking-wider opacity-80 flex flex-row items-start gap-2">
                <div className="mt-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke-width="2"
                      d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <a
                    href="https://www.google.com/maps/place/D+Mall/@28.6921625,77.1506607,17z/data=!3m1!4b1!4m6!3m5!1s0x390d031c9a539885:0x6eeaa336893a5c65!8m2!3d28.6921578!4d77.1532356!16s%2Fg%2F11jflfwrzj?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Delhi: 204, 2nd floor D-Mall, Netaji Subhash Place,
                    Pitampura, New Delhi-110034. (India)
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px]  mt-10 bg-slate-500"></div>
        <div className="flex flex-row pt-6 pb-6 justify-between items-center text-slate-200">
          <div>
            Copyright © 2018 - 2024 UMW Tech Solutions Private Limited. All
            rights reserved.
          </div>
          <div>
            <ul class="fot-social mb-0 flex flex-row gap-6">
              <li class="icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100094144990517"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="white"
                      className="hover:fill-red-500"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      height="1.3em"
                      width="1.3em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li class="icon">
                <a
                  href="https://instagram.com/live101.in?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="white"
                      className="hover:fill-red-500"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1.3em"
                      width="1.3em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li class="icon">
                <a
                  href="https://youtube.com/@live101in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                >
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="white"
                      className="hover:fill-red-500"
                      stroke-width="0"
                      viewBox="0 0 576 512"
                      height="1.3em"
                      width="1.3em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li class="icon">
                <a
                  href="https://www.linkedin.com/company/14456011/admin/feed/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="white"
                      className="hover:fill-red-500"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1.3em"
                      width="1.3em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li class="icon">
                <a
                  href=" https://in.pinterest.com/liveI0I/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                >
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="white"
                      className="hover:fill-red-500"
                      stroke-width="0"
                      viewBox="0 0 496 512"
                      height="1.3em"
                      width="1.3em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Footer;
