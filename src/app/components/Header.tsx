import Image from "next/image";
import React from "react";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="min-h-screen flex flex-col px-6 sm:px-14">
      {/* Navbar */}
      <div className="flex flex-row items-center justify-between mt-6">
        <img src={"/logo.png"} className="w-20 h-7" alt="logo image" />{" "}
        <div className="inline-flex gap-x-4">
          <a className="hover:cursor-pointer font-poppins text-md font-[600] text-[#232323] hover:text-[#F55253] capitalize">
            home
          </a>
          <a className="hover:cursor-pointer font-poppins text-md font-[600]  text-[#232323] hover:text-[#F55253] capitalize">
            menu
          </a>
          <a className="hover:cursor-pointer font-poppins text-md font-[600] text-[#232323] hover:text-[#F55253] capitalize">
            service
          </a>
          <a className="hover:cursor-pointer font-poppins text-md font-[600] text-[#232323] hover:text-[#F55253] capitalize">
            shop
          </a>
        </div>
        <SearchBar />
      </div>

      <div className="w-full h-screen  flex flex-col sm:flex-row mt-10 sm:mt-0 justify-between items-center">
        {/* Seaction 1 */}
        <div className="w-full flex flex-col items-start">
          <div className="bg-[#FDECEC] flex flex-row justify-between items-center rounded-2xl px-4 py-1">
            <p className="text-xs font-poppins drop-shadow-lg text-[#F55556] font-semibold ">
              More than Faster
            </p>
            <img className="w-6 h-6 object-cover mt-2" src="/strawberry.png" />
          </div>

          <h2 className="text-5xl sm:text-7xl font-poppins mt-5 sm:mt-10 leading-[3rem] sm:leading-[5rem] font-extrabold text-[#2E2E2E]">
            Groceries delivered in as little as{" "}
            <span className="font-normal text-[#F54748]"> 2 hours</span>
          </h2>

          <p className="mt-5 font-poppins text-[#676767] leading-6">
            Grocen atssures fresh grocery every morning to your family without
            getting out in this pandemic.
          </p>

          <div className="mt-5 hover:scale-110 duration-150 cursor-pointer rounded-md bg-[#F86061] px-4 py-2 ">
            <p className="font-poppins text-white font-semibold  capitalize">
              Order now
            </p>
          </div>
        </div>
        {/* Seaction 2 */}
        <div className="w-full flex flex-col items-center relative justify-center">
          {/* Card 1 */}
          <div className="absolute left-[-18%] sm:left-[-6%] top-2 sm:top-44">
            <div className="w-60 h-52  relative ">
              <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-start">
                <h3 className=" border-b-2 border-[#FFA610] font-semibold text-sm text-[#2E2E2E]">
                  Fresh orange
                </h3>
                <p className="mt-2 font-bold text-xl font-poppins text-[#2E2E2E] ">
                  $ 44.60
                </p>
              </div>

              <img
                src={"/fillShape.png"}
                className="h-full w-full object-fill"
                alt="fill shape image"
              />
              <img
                src={"/fruits.png"}
                className="h-20 w-20 absolute top-0 right-0 left-0 m-auto"
                alt="fruits shape image"
              />
              <img
                src={"/basketIcon.png"}
                className="h-14 w-14 absolute bottom-10 right-0 left-0 m-auto"
                alt="basket shape image"
              />
            </div>
          </div>
          {/* Card 2 */}
          <div className="absolute right-[-5%] sm:right-0 top-16 sm:top-20">
            <div className="relative flex flex-row px-4 py-2 shadow-md rounded-md justify-between items-center gap-x-2">
              <img
                className="w-7 h-7 "
                src="/alarmClock.png"
                alt="alarm clock image"
              />
              <img
                className="w-32 h-32 sm:w-28 sm:h-36 absolute  top-[100%]"
                src="/arrow.png"
                alt="Arrow Image for Pointing"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-sm font-semibold font-poppins text-[#676767]">
                  Delivery Time
                </h3>
                <p className="text-xs text-[#A5A4A4] font-poppins">30 Mins</p>
              </div>
            </div>
          </div>
          <img
            className="w-10/12 sm:h-5/6 sm:w-8/12"
            src="/HeaderMan.png"
            alt="Header man Image "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
