import React from "react";
import Navbar from "../component/navbar";
import Place from "../component/place";
import ContactFooter from "../component/contactfooter";

function ContactUs() {
  const mobile = /^[0-9]*$/;

  return (
    <div className="w-[100vw] overflow-x-hidden">
      <div className="relative w-full h-[120vh]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmi9tF-D4Sc8fcDXd-YkLt6yY6SnlpuCJo3Q&s"
          alt="hero"
          className="absolute top-0 left-0 w-full h-[95vh] md:h-[120vh] object-cover blur-md -z-10 filter brightness-75"
        />

        <div className="w-[78%] pb-20 mx-auto flex flex-row items-end h-full">
          <div className="w-[50%] flex flex-col gap-6">
            <h1 className="text-5xl text-white font-bold">Contact us</h1>
            <p className="text-3xl w-[90%] content-start text-white opacity-70 leading-loose">
              Kindly fill the details and we will get back to you
            </p>
            <div className="relative mt-16 shadowimage bg-[rgba(0,0,0,0.5)] backdrop-blur-md rounded-3xl">
              <div className="shadowimage2">
                <div className="text-white font-semibold text-xl px-6 py-5">
                  GET IN TOUCH
                </div>
                <div className="flex flex-wrap border-t  border-[rgb(255,255,255,0.1)]">
                  <div className="w-1/4 max-w-1/4 px-2 py-5 flex gap-3 text-white flex-col justify-evenly items-center border-r border-[rgb(255,255,255,0.1)]">
                    <svg
                      stroke="white"
                      fill="white"
                      stroke-width="1"
                      viewBox="0 0 512 512"
                      class="md"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                    <h6 className="font-semibold text-md ">Inquiry helpline</h6>
                    <p className="text-sm">9821009569</p>
                  </div>
                  <div className="w-1/4 max-w-1/4 px-2 py-5 flex gap-3 text-white flex-col justify-evenly items-center border-r border-[rgb(255,255,255,0.1)]">
                    <svg
                      stroke="white"
                      fill="white"
                      stroke-width="1"
                      viewBox="0 0 24 24"
                      class="md"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" opacity=".1"></path>
                      <path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9z"></path>
                    </svg>
                    <h6 className="font-semibold text-md ">Artist Helpline</h6>
                    <p className="text-sm">+919319145394</p>
                  </div>
                  <div className="w-1/4 max-w-1/4 px-2 py-5 flex gap-3 text-white flex-col justify-evenly items-center border-r border-[rgb(255,255,255,0.1)]">
                    <svg
                      stroke="white"
                      fill="white"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="md"
                      height="1.7em"
                      width="1.7em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                    </svg>
                    <h6 className="font-semibold text-md ">Email</h6>
                    <p className="text-sm">info@live1O1.in</p>
                  </div>
                  <div className="w-1/4 max-w-1/4 px-2 py-7 flex gap-4 text-white flex-col justify-evenly items-center">
                    <svg
                      stroke="white"
                      fill="white"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="2em"
                      width="2em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z"></path>
                    </svg>
                    <h6 className="font-semibold text-md ">Follow Us</h6>
                    <ul class="flex w-full gap-2 justify-center items-center mb-0">
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/people/Live101/100094144990517/"
                          aria-label="Facebook"
                        >
                          <svg
                            stroke="white"
                            fill="white"
                            stroke-width="0"
                            viewBox="0 0 320 512"
                            class="sm"
                            height="1.5em"
                            width="1.5em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                          </svg>
                          <span class="hidden">
                            Visit our Facebook Page
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.youtube.com/@live101in"
                          aria-label="Youtube"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 576 512"
                            class="sm"
                            height="1.5em"
                            width="1.5em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://instagram.com/live101.in?igshid=YmMyMTA2M2Y="
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            class="sm"
                            height="1.5em"
                            width="1.5em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                          </svg>
                          <span class="hidden">
                            Visit our instagram Page
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex justify-end">
            <div className="w-[90%] bg-[rgba(0,0,0,0.5)] backdrop-blur-md p-7 pt-9 rounded-3xl">
                <form>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label for="name" className="flex gap-1 text-white text-2xl ml-3">Name<span className="text-red-600">*</span></label>
                      <input placeholder="Enter your name here" required type="text" name="name" id="name" className="bg-[rgba(200,196,196,0.27)] text-white rounded-full p-4 pl-5 outline-none text-xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label for="city" className="text-white text-2xl ml-3">city</label>
                      <input type="text" placeholder="select your city" name="city" id="city" className="bg-[rgba(200,196,196,0.27)] text-white rounded-full p-4 pl-5 outline-none text-xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label for="mobile" className="flex gap-1 text-white text-2xl ml-3">Mobile<span className="text-red-600">*</span></label>
                      <input placeholder="Enter your mobile" required type="tel" name="mobile" id="mobile" className="bg-[rgba(200,196,196,0.27)] text-white rounded-full p-4 pl-5 outline-none text-xl" minLength={10} maxLength={10} pattern='[0-9]{10}' onKeyDown={(e)=>{if(!mobile.test(e.key)&&e.key !== 'Backspace'){e.preventDefault();}}} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label for="Email" className="flex gap-1 text-white text-2xl ml-3">Email<span className="text-red-600">*</span></label>
                      <input type="email" required placeholder="Your Email id" name="email" id="email" className="bg-[rgba(200,196,196,0.27)] text-white rounded-full p-4 pl-5 outline-none text-xl" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full mt-6">
                      <label for="Email" className="text-white text-2xl ml-3">Your Message</label>
                      <textarea  placeholder="Your message here" required name="email" id="email" className="bg-[rgba(200,196,196,0.27)] text-white rounded-2xl resize-none min-h-[200px] p-4 pl-5 outline-none text-xl" />
                  </div>
                  <button type="submit" className="mt-12 w-full rounded-full flex items-center justify-center py-3 text-white submitbtn font-medium text-xl">Submit</button>
                </form>
            </div>
          </div>
        </div>

      </div>
        <Place/>
        <ContactFooter/>
    </div>
  );
}

export default ContactUs;
