import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="min-h-screen flex flex-col px-14">
      <div className="flex flex-row justify-between mt-6">
        <img src={"/logo.png"} className="w-20 h-7" alt="logo image" />{" "}
        <div className="inline-flex gap-x-4">
          <a className="hover:cursor-pointer font-poppins text-md font-[600]  hover:text-[#F55253] capitalize">
            home
          </a>
          <a className="hover:cursor-pointer font-poppins text-md font-[600] hover:text-[#F55253] capitalize">
            menu
          </a>
          <a className="hover:cursor-pointer font-poppins text-md font-[600] hover:text-[#F55253] capitalize">
            service
          </a>
          <a className="hover:cursor-pointer font-poppins text-md font-[600] hover:text-[#F55253] capitalize">
            shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
