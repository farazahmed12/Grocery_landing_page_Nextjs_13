import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="px-6 sm:px-14  flex flex-col gap-y-6 sm:gap-y-20 justify-center items-center h-screen bg-[#FDECEC]">
      <div className="flex flex-col items-center">
        <h2 className="text-[#F54748] text-sm font-semibold font-poppins">
          What we Serve
        </h2>
        <h2 className="text-[#2e2e2e] text-center text-3xl capitalize font-semibold font-poppins">
          fruit and vegetable delivered to your home
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-y-8 sm:gap-x-20 justify-center items-center">
        {/* Card 1 */}
        <div className="bg-white w-[16rem] rounded-md flex flex-col justify-center items-center py-8 px-6">
          <img
            className="w-14 h-14 object-contain"
            src="/shipping.png"
            alt="shipping image icons"
          />

          <h3 className="text-[#2e2e2e] mb-4 text-md capitalize font-semibold font-poppins">
            Free shipping
          </h3>
          <p className="text-[#676767] leading-5 w-fit text-xs text-center capitalize font-normal font-poppins">
            Enjoy Order in a hand using the fresness of groceries
          </p>
        </div>
        {/* Card 2 */}
        <div className="relative w-[16rem]">
          <div className="bg-[#F54748] h-[13rem] w-[16rem] rounded-lg -rotate-6"></div>
          <div className="bg-white absolute top-0 z-10 rounded-md flex flex-col justify-center items-center py-8 px-6">
            <img
              className="w-14 h-14 object-contain"
              src="/return.png"
              alt="return image "
            />

            <h3 className="text-[#2e2e2e] mb-4 text-md capitalize font-semibold font-poppins">
              15 days returns
            </h3>
            <p className="text-[#676767] leading-5 w-fit text-xs text-center capitalize font-normal font-poppins">
              Order in a handy way using the freshness of the groceries.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white w-[16rem] rounded-md flex flex-col justify-center items-center py-8 px-6">
          <img
            className="w-14 h-14 object-contain"
            src="/checkout.png"
            alt="shipping image icons"
          />

          <h3 className="text-[#2e2e2e] mb-4 text-md capitalize font-semibold font-poppins">
            Secure Checkout
          </h3>
          <p className="text-[#676767] leading-5 w-fit text-xs text-center capitalize font-normal font-poppins">
            If you get rotten items - return immediately to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
