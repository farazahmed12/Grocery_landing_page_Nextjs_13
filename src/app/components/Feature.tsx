import React from "react";

const Feature = () => {
  return (
    <div className="h-screen bg-white flex flex-row justify-center items-center px-6 sm:px-14">
      <div className="w-6/12">
        <img className="w-full h-full" src={"/imagecard.png"} />
      </div>

      <div className="flex w-6/12 flex-col px-6 gap-y-4 justify-center items-start">
        <p className="text-lg font-poppins text-[#03A66B] uppercase font-semibold">
          WHY CHOOSE US
        </p>
        <h3 className="text-[#2e2e2e] w-8/12 text-3xl font-poppins font-bold ">
          Find Favorites and Discover New Ones
        </h3>
        <p className="text-poppins font-xs text-[#676767]">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos{" "}
        </p>
        <div className=" mt-5 rounded-md bg-[#F86061] px-4 py-2 ">
          <p className="font-poppins text-white font-semibold cursor-pointer capitalize">
            Explore now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
