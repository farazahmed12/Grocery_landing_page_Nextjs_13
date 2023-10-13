import Image from "next/image";
import React from "react";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="min-h-screen flex flex-col px-14">
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

      <div className="w-full h-screen mt-10 flex flex-row justify-between items-center">
        {/* Seaction 1 */}
        <div className="w-full flex flex-col items-start">
          <div className="bg-[#FDECEC] flex flex-row justify-between items-center rounded-2xl px-4 py-1">
            <p className="text-xs font-poppins drop-shadow-lg text-[#F55556] font-semibold ">
              More than Faster
            </p>
            <img className="w-6 h-6 object-cover mt-2" src="/strawberry.png" />
          </div>

          <h2 className="text-7xl font-poppins  mt-10 leading-[5rem] font-extrabold text-[#2E2E2E]">
            Groceries delivered in as little as{" "}
            <span className="font-normal text-[#F54748]"> 2 hours</span>
          </h2>

          <p className="mt-5 font-poppins text-[#676767] leading-6">
            Grocen atssures fresh grocery every morning to your family without
            getting out in this pandemic.
          </p>

          <div className="mt-5 rounded-md bg-[#F86061] px-4 py-2 ">
            <p className="font-poppins text-white font-normal capitalize">
              Order now
            </p>
          </div>
        </div>
        {/* Seaction 2 */}
        <div className="w-full flex flex-col items-center justify-center">
          {/* Card 1 */}
          <div className="absolute">
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
          <div className="absolute right-0 ">
            <div className="flex flex-row justify-between items-center gap-x-2">
              <img
                className="w-7 h-7 "
                src="/alarmClock.png"
                alt="alarm clock image"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-sm font-semibold font-poppins text-[#676767]">
                  Delivery Time
                </h3>
                <p className="text-xs text-[#A5A4A4] font-poppins">30 Mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
