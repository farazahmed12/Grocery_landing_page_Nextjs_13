import React from "react";

const Footer = () => {
  return (
    <div className=" bg-white w-full px-6 sm:px-14">
      <div className="grid grid-row-4 sm:grid-cols-4  py-6  w-full ">
        <div className="py-3 cols-span-4 flex flex-col gap-y-4">
          <img src={"/logo.png"} className="w-20 h-7" alt="logo image" />
          <p className="text-poppins font-xs text-[#676767]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos{" "}
          </p>
        </div>
        <div className="py-3 cols-span-4 flex flex-col items-start gap-y-3">
          <h3 className="text-[#2e2e2e]  text-md font-poppins font-semibold ">
            Company
          </h3>
          <p className="text-[#676767] text-sm font-poppins font-normal ">
            About us
          </p>
          <p className="text-[#676767] text-sm font-poppins font-normal ">
            Blog
          </p>
          <p className="text-[#676767] text-sm font-poppins font-normal ">
            All Products
          </p>
          <p className="text-[#676767] text-sm font-poppins font-normal ">
            Location Map
          </p>
        </div>
        <div className="py-3 cols-span-4 flex flex-col items-start gap-y-3">
          <h3 className="text-[#2e2e2e]  text-md font-poppins font-semibold ">
            Services
          </h3>
          <p className="text-[#676767] text-sm font-poppins font-normal ">
            Order Tracking
          </p>
          <p className="text-[#676767] text-sm font-poppins font-normal ">
            Wish List
          </p>
          <p className="text-[#676767] text-sm font-poppins font-normal ">
            My account
          </p>
          <p className="text-[#676767] text-sm font-poppins font-normal ">
            Term & Conditions
          </p>
        </div>
        <div className="py-3 cols-span-4 flex flex-col gap-y-4">
          <h3 className="text-[#2e2e2e]  text-md font-poppins font-semibold ">
            Get in Touch
          </h3>
          <p className="text-poppins font-xs text-[#676767]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos{" "}
          </p>
        </div>
      </div>

      <div className=" border-t-2 py-4 flex flex-row justify-between">
        <p className="text-[#2e2e2e] font-poppins text-sm">
          All Rights Reserved @ BESNIK 2021
        </p>
        <div className="inline-flex gap-x-3">
          <p className="text-[#2e2e2e] font-poppins text-sm">
            Terms & Conditions
          </p>{" "}
          <p className="text-[#2e2e2e] font-poppins text-sm">
            Privacy & Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
