import React from "react";

const SearchBar = () => {
  return (
    <div className="py-3 px-2 rounded-lg relative shadow-md">
      <div className="flex flex-row items-center gap-x-3 ">
        <img className="w-4 h-4" src="/search.png" />
        <input
          placeholder="Search"
          className="border-0 focus:outline-none active:border-0 placeholder:text-sm font-poppins text-[#232323]"
        />
        <div className="flex flex-row border-l-2 pl-3">
          <img className="w-4 h-4" src="/basket.png" />
        </div>
        <div className="bg-[#F55253] absolute  flex flex-row justify-center items-center right-0 top-0 w-4 h-4 rounded-full">
          <p className="text-white font-semibold text-xs">2</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
