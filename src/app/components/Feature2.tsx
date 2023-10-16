import React from "react";

const Feature2 = () => {
  return (
    <div className="h-screen bg-white flex flex-col sm:flex-row justify-center items-center px-6 sm:px-14">
      <div className="flex w-full sm:w-6/12 flex-col px-6 gap-y-4 justify-center items-start">
        <p className="text-lg font-poppins text-[#F9BA45] uppercase font-semibold">
          HOME DELIVERY
        </p>
        <h3 className="text-[#2e2e2e] w-8/12 text-3xl font-poppins font-bold ">
          Sit at Home We Will Take Care Your Order
        </h3>
        <p className="text-poppins font-xs text-[#676767]">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos{" "}
        </p>
        <div className="text-[#F86061] hover:scale-110 duration-150 cursor-pointer hover:text-white mt-5 rounded-md border border-[#F86061] bg-white hover:bg-[#F86061] px-4 py-2 ">
          <p className="font-poppins  font-semibold  capitalize">Explore now</p>
        </div>
      </div>

      <div className="w-full sm:w-6/12">
        <img className="w-full h-full" src={"/chefImage.png"} />
      </div>
    </div>
  );
};

export default Feature2;
