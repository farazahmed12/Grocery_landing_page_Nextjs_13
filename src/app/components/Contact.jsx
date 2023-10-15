import React from "react";

const Contact = () => {
  return (
    <div className="h-screen bg-[#FDECEC] flex flex-row justify-center items-center px-6 sm:px-14">
      <div className="w-6/12 flex justify-center">
        <img className="w-[20vw] h-[55vh]" src={"/mobile.png"} />
      </div>

      <div className="flex w-6/12 flex-col px-6 gap-y-4 justify-center items-start">
        <p className="text-lg font-poppins text-[#03A66B]  font-semibold">
          Download Our App
        </p>
        <h3 className="text-[#2e2e2e] w-8/12 text-3xl font-poppins font-bold ">
          Get the Groceries app order more easily.
        </h3>
        <p className="text-poppins font-xs text-[#676767]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
        <div className="flex flex-row justify-center gap-x-4">
          <div className="inline-flex items-center gap-x-3 cursor-pointer hover:scale-110 duration-150 py-2 px-4 border border-[#292929] rounded-md">
            <img alt="Play Store Image" src="/apple.png" className="w-7 h-7 " />
            <p className="text-md font-poppins text-[#292929]  font-semibold">
              App Store
            </p>
          </div>
          <div className="inline-flex items-center gap-x-3 cursor-pointer hover:scale-110 duration-150 py-2 px-4 border border-[#292929] rounded-md">
            <img
              alt="Play Store Image"
              src="/playstore.png"
              className="w-7 h-7 "
            />
            <p className="text-md font-poppins text-[#292929]  font-semibold">
              PlayStore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
